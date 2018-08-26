import { createReducer } from '../utils';
import {
  BOOKING,
  OPEN_BOOKING_FORM,
  CLOSE_BOOKING_FORM,
  OPEN_BOOKING_DETAILS
} from '../actions';

const initialState = {
  activeId: false,
  list: [],
  requests: {},
  isLoading: false,
  isOpenForm: false
};

const bookings = createReducer(initialState, {
  [OPEN_BOOKING_FORM]: state => ({
    ...state,
    isOpenForm: true,
    activeId: false
  }),
  [CLOSE_BOOKING_FORM]: state => ({
    ...state,
    isOpenForm: false,
    activeId: false
  }),
  [OPEN_BOOKING_DETAILS]: (state, action) => ({
    ...state,
    isOpenForm: false,
    activeId: action.payload.id
  }),
  [BOOKING.REQUEST]: (state, action) => ({
    ...state,
    isOpenForm: false,
    requests: {
      ...state.requests,
      [action.payload.data.id]: action.payload.data
    }
  }),
  [BOOKING.FAILURE]: state => ({ ...state }),
  [BOOKING.SUCCESS]: (state, action) => ({
    ...state,
    activeId: action.payload.response.id,
    list: state.list.concat(action.payload.response)
  })
});

export default bookings;
