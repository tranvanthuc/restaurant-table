import {
  DEFAULT_REQUEST,
  DEFAULT_SUCCESS,
  DEFAULT_FAILURE,
} from 'constants/index';

export const defaultAction = (type, payload = null) => ({
  type,
  payload,
});

export const defaultMutationRequest = (state) => ({
  ...state,
  ...DEFAULT_REQUEST,
});

export const defaultMutationSuccess = (state) => ({
  ...state,
  ...DEFAULT_SUCCESS,
});

export const defaultMutationFailure = (state, { payload: { error } }) => ({
  ...state,
  ...DEFAULT_FAILURE,
  error,
});
