import { all } from 'redux-saga/effects';
import { sagas as authenticationSagas } from './authenticationSaga';


export function* sagas() {
  yield all([...authenticationSagas])
}