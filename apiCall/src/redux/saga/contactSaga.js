// Imports: Dependencies
import {delay, all, takeLatest, call, put, takeEvery} from 'redux-saga/effects';
import {SUCCESS, FAIL, GET_DATA, REQUEST} from '../action/actionType';
import {getAllUsers} from '../../api/contactApi';

function* getUsers() {
  console.log('contactSaga Screen =');

  try {
    //const user = yield call(getAllUsers);
    //console.log('contactSaga Screen = try', user);

    yield put({type: GET_DATA + '_' + SUCCESS, payload: 'user11'});
  } catch (error) {
    yield put({type: GET_DATA + '_' + FAIL, payload: error});
    //console.log('contactSaga catch =');
  }
}

export default function* contactSaga() {
  yield takeEvery(GET_DATA + '_' + REQUEST, getUsers);
}
