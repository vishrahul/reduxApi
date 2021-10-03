import {FAIL, GET_DATA, REQUEST, SUCCESS} from '../action/actionType';

// Initial State
const initialState = {
  user: [],
  error: '',
};

// Redux: Counter Reducer
export default contactListReducer = (state = initialState, {type, paylaod}) => {
  // console.log('paylaod == =', type);
  // console.log('paylaod == =111', paylaod);

  switch (type) {
    case GET_DATA + '_' + REQUEST: {
      return {
        ...state,
        //user: paylaod,
      };
    }

    case GET_DATA + '_' + SUCCESS: {
      return {
        ...state,
        user: paylaod,
      };
    }

    case GET_DATA + '_' + FAIL: {
      return {
        ...state,
        user: {},
        error: paylaod,
      };
    }

    default: {
      return state;
    }
  }
};
