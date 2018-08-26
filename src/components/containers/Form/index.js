import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid/v4';

import { booking, closeBookingForm } from '../../../store/actions';
import { getRequestById, getBookingById } from '../../../store/selectors';

import Types from '../../Types';

import BookingForm from './BookingForm';

import styles from './styles.scss';

const cx = classNames.bind(styles);

@connect(
  state => ({
    isOpenForm: state.bookings.isOpenForm,
    request: getRequestById(state.bookings),
    booking: getBookingById(state.bookings)
  }),
  dispatch => ({
    book: bindActionCreators(booking.request, dispatch),
    closeForm: bindActionCreators(closeBookingForm, dispatch)
  })
)
class Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmitBookingForm = this.onSubmitBookingForm.bind(this);
    this.onCloseBookingForm = this.onCloseBookingForm.bind(this);
  }

  onSubmitBookingForm({ premium, economy, date }) {
    this.props.book({
      id: uuid(),
      date,
      premium: parseInt(premium, 10),
      economy: parseInt(economy, 10)
    });
  }

  onCloseBookingForm() {
    this.props.closeForm();
  }

  renderBookingForm() {
    return (
      <BookingForm
        onClose={this.onCloseBookingForm}
        onSubmit={this.onSubmitBookingForm}
      />
    );
  }

  renderRequest() {
    const { request, booking } = this.props;
    const { premium, economy } = booking;

    if (!booking) {
      return null;
    }

    return (
      <div className={cx('request')}>
        <div>Free Premium rooms: {request.premium}</div>
        <div>Free Economy rooms: {request.economy}</div>
        <div>
          Usage Premium: {premium.count} (EUR {premium.summary})
        </div>
        <div>
          Usage Economy: {economy.count} (EUR {economy.summary})
        </div>
      </div>
    );
  }

  render() {
    const { isOpenForm } = this.props;

    return (
      <div className={cx('form')}>
        {isOpenForm ? this.renderBookingForm() : null}
        {this.renderRequest()}
      </div>
    );
  }
}

Form.propTypes = {
  book: PropTypes.func,
  closeForm: PropTypes.func,
  isOpenForm: PropTypes.bool,
  request: Types.Request,
  booking: Types.Booking
};

export default Form;
