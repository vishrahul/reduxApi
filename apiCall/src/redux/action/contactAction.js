import {FAIL, GET_DATA, REQUEST, SUCCESS} from './actionType';

export function fetchContactData() {

  return {
    type: GET_DATA+"_"+REQUEST,
    payload:{}
  };
}




//..............why we need

// export function fetchDataSuccess() {

//   //console.log('aaaa44 ', user);
//   return {
//     type:GET_DATA+"_"+SUCCESS,
//    // payload: user,
//   };
// }

// export function fetchDataFailure(error) {
//   console.log('aaaa55 ', error);
//   return {
//     type: GET_DATA+"_"+FAIL,
//     payload: {},
//     error: error,
//   };
// }