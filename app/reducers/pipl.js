import { PIPL_REQUEST, PIPL_RESPONSE, PIPL_ERROR } from '../actions/pipl';

function getInitialState() {
  return {
    requesting: false,
    error: false,
    person: null,
    email: null,
  };
}

function request(email) {
  return {
    ...getInitialState(),
    requesting: true,
    email,
  };
}

function response(state, person) {
  return {
    ...state,
    requesting: false,
    person,
  };
}

function error(state, message) {
  return {
    ...getInitialState(),
    email: state.email,
    error: message,
  };
}

export default function reducer(state = getInitialState(), action) {
  switch (action.type) {
    case PIPL_REQUEST:
      return request(action.payload);

    case PIPL_RESPONSE:
      return response(state, action.payload);

    case PIPL_ERROR:
      return error(state, action.payload);

    default:
      return state;
  }
}
