// actions to change state

import { DEFAULT_SUCCESS } from 'constants/index';

export const getListSuccess = (state, { payload: { list } }) => ({
  ...state,
  ...DEFAULT_SUCCESS,
  list,
});
