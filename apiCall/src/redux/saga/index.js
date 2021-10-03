// Imports: Dependencies
import {all, fork, spawn} from 'redux-saga/effects';

// Imports: Redux Sagas
import contactSaga from './contactSaga';

// Redux Saga: Root Saga
export default function* rootSaga() {
  yield spawn(contactSaga);
}









//******************* which one correct



// import {spawn} from 'redux-saga/effects';

// // Sagas
// import contactSaga from './contactSaga';

// // Export the root saga
// export default function* rootSaga() {
//   yield spawn(contactSaga);
// }