import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import classNames from 'classnames/bind';

import scss from './styles.scss';
const styles = classNames.bind(scss);

const required = value => (value ? undefined : 'Required');
const date = value =>
  new Date(value).valueOf() > new Date().valueOf()
    ? undefined
    : 'Incorrect date';

const renderField = ({ id, input, label, type, meta: { touched, error } }) => (
  <div className={styles('group')}>
    <label htmlFor={id} className={styles('label')}>
      {label}
    </label>
    <div>
      <input
        {...input}
        id={id}
        placeholder={label}
        type={type}
        className={styles('input')}
      />
      {touched && (error && <span className={styles('error')}>{error}</span>)}
    </div>
  </div>
);

class BookingForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={styles('form')}>
        <div
          role="button"
          tabIndex={0}
          onClick={this.props.onClose}
          onKeyDown={() => {}}
          className={styles('close')}
        >
          x
        </div>
        <Field
          validate={[required, date]}
          name="date"
          component={renderField}
          type="date"
          id="date"
          label="Date"
        />
        <Field
          validate={required}
          name="premium"
          component={renderField}
          type="number"
          id="premium"
          label="Free Premium rooms"
        />
        <Field
          validate={required}
          name="economy"
          component={renderField}
          type="number"
          id="economy"
          label="Free Economy rooms"
        />
        <div className={styles('group')}>
          <button type="submit" className={styles('button')}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

BookingForm.propTypes = {
  handleSubmit: PropTypes.func,
  onClose: PropTypes.func
};

export default reduxForm({ form: 'booking' })(BookingForm);
