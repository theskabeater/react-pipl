export const PIPL_REQUEST = 'pipl.PIPL_REQUEST';
export const PIPL_RESPONSE = 'pipl.PIPL_RESPONSE';
export const PIPL_ERROR = 'pipl.PIPL_ERROR';

export function piplRequest(email) {
  return {
    type: PIPL_REQUEST,
    payload: email,
  };
}

export function piplResponse(person) {
  return {
    type: PIPL_RESPONSE,
    payload: person,
  };
}

export function piplError(message) {
  return {
    type: PIPL_ERROR,
    payload: message,
    error: true,
  };
}
