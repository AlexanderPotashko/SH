import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../../store/actions';

import Form from '../../containers/Form';
import List from '../../containers/List';

import Header from '../../presentational/Header';
import CalendarHeatmap from '../../presentational/CalendarHeatmap';

import * as metadata from '../../../metadata';
import Types from '../../Types';

import styles from './styles.scss';

const cx = classNames.bind(styles);

@connect(
  state => ({
    bookings: state.bookings.list
  }),
  dispatch => ({
    logout: bindActionCreators(logout, dispatch)
  })
)
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookings } = this.props;

    return (
      <div>
        <Helmet
          title={`${metadata.title} - Dashboard`}
          meta={metadata.meta}
          link={metadata.link}
          script={metadata.script}
          noscript={metadata.noscript}
        />
        <section className={cx('section')}>
          <Header logout={this.props.logout} />
          <section className={cx('content')}>
            <CalendarHeatmap values={bookings} />
            <div className={cx('container')}>
              <List />
              <Form />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func,
  bookings: Types.Bookings
};

export default Dashboard;
