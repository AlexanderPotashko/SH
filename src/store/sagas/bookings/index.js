import { call, put, takeEvery } from 'redux-saga/effects';
import { callBooking } from './api';
import { BOOKING } from '../../actions';

function* login(action) {
  try {
    const payload = yield call(callBooking, action.payload.data);

    yield put({ type: BOOKING.SUCCESS, payload });
  } catch (e) {
    yield put({ type: BOOKING.FAILURE, message: e.message });
  }
}

function* bookings() {
  yield takeEvery(BOOKING.REQUEST, login);
}

export default bookings;
