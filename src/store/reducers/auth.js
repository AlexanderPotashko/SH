import { createReducer } from '../utils';
import { LOGIN, LOGOUT } from '../actions';

const initialState = { token: null };

const posts = createReducer(initialState, {
  [LOGOUT]: state => ({ ...state, token: null }),
  [LOGIN.REQUEST]: state => ({ ...state, token: null }),
  [LOGIN.FAILURE]: state => ({ ...state, token: false }),
  [LOGIN.SUCCESS]: state => ({ ...state, token: true })
});

export default posts;
