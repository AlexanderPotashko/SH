import { createAction, createRequest, createRequestTypes } from '../utils';

/* TYPES */
export const LOGOUT = 'LOGOUT';
export const OPEN_BOOKING_FORM = 'OPEN_BOOKING_FORM';
export const CLOSE_BOOKING_FORM = 'CLOSE_BOOKING_FORM';
export const OPEN_BOOKING_DETAILS = 'OPEN_BOOKING_DETAILS';

export const logout = () => createAction(LOGOUT);
export const openBookingForm = () => createAction(OPEN_BOOKING_FORM);
export const closeBookingForm = () => createAction(CLOSE_BOOKING_FORM);
export const openBookingDetails = id =>
  createAction(OPEN_BOOKING_DETAILS, { id });

/* REQUESTS */
export const LOGIN = createRequestTypes('LOGIN');
export const BOOKING = createRequestTypes('BOOKING');

export const login = createRequest(LOGIN);
export const booking = createRequest(BOOKING);
