import {
  GET_LIST_MOVIES_FAILURE,
  GET_LIST_MOVIES_SUCCESS,
  GET_LIST_MOVIES_REQUEST,
} from './type';
import { getListSuccess } from './mutations';
import { DEFAULT_STATE } from 'constants/index';
import { defaultMutationRquest, defaultMutationFailure } from 'libs/store';

const initialState = {
  ...DEFAULT_STATE,
  list: [],
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    // list
    case GET_LIST_MOVIES_REQUEST:
      return defaultMutationRquest(state);
    case GET_LIST_MOVIES_SUCCESS:
      return getListSuccess(state, action);
    case GET_LIST_MOVIES_FAILURE:
      return defaultMutationFailure(state, action);

    default:
      return state;
  }
}
