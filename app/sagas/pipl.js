import { put, call, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { PIPL_REQUEST, piplResponse, piplError } from '../actions/pipl';

const API_ENDPOINT = 'https://crossorigin.me/http://api.pipl.com/search/';
const API_KEY = 'rfktnm1ja0bv5cr41nt6wpmc';

export function fetchPersonAPI(email) {
  return fetch(`${API_ENDPOINT}?email=${email}&key=${API_KEY}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error(`${response.status} Bad response from server!`);
      }

      return response.json();
    });
}

export function* fetchPerson({ payload: email }) {
  try {
    const person = yield call(fetchPersonAPI, email);
    yield put(piplResponse(person));
  } catch (error) {
    yield put(piplError(error.message));
  }
}

export default function* pipl() {
  yield takeLatest(PIPL_REQUEST, fetchPerson);
}
