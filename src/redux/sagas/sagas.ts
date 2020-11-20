import { all } from 'redux-saga/effects';
import { sagas as authenticationSagas } from './authenticationSaga';
import { sagas as gameSagas } from './gameSaga';


export function* sagas() {
  yield all([...authenticationSagas, ...gameSagas])
}