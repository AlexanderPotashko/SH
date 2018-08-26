import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../presentational/Button';

import { openBookingForm, openBookingDetails } from '../../../store/actions';

import Types from '../../Types';

import styles from './styles.scss';

const cx = classNames.bind(styles);

@connect(
  state => ({
    bookings: state.bookings.list
  }),
  dispatch => ({
    openBookingForm: bindActionCreators(openBookingForm, dispatch),
    openBookingDetails: bindActionCreators(openBookingDetails, dispatch)
  })
)
class List extends Component {
  calcSummary(premium, economy) {
    return parseInt(premium.summary, 10) + parseInt(economy.summary, 10);
  }

  renderItems() {
    const { bookings } = this.props;

    if (bookings.length === 0) {
      return null;
    }

    return (
      <ul className={cx('items')}>
        {bookings.map(({ id, date, premium, economy }, key) => (
          <li className={cx('item')} key={key}>
            <div
              tabIndex={0}
              onClick={() => this.props.openBookingDetails(id)}
              onKeyDown={() => this.props.openBookingDetails(id)}
              role="button"
            >
              {date} (EUR {this.calcSummary(premium, economy)})
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className={cx('list')}>
        <Button onClick={() => this.props.openBookingForm()} text="Create" />
        {this.renderItems()}
      </div>
    );
  }
}

List.propTypes = {
  openBookingDetails: PropTypes.func,
  openBookingForm: PropTypes.func,
  bookings: Types.Bookings
};

export default List;
