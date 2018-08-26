import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import bookings from './bookings';

const rootReducer = combineReducers({
  form: formReducer,
  auth,
  bookings
});

export default rootReducer;
