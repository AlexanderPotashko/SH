import { all } from 'redux-saga/effects';

import auth from './auth';
import bookings from './bookings';

export default function* rootSaga() {
  yield all([auth(), bookings()]);
}
