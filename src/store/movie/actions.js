import { defaultAction } from 'libs/store';

// LIST
export const GET_LIST_MOVIES_REQUEST = 'GET_LIST_MOVIES_REQUEST';
export const GET_LIST_MOVIES_SUCCESS = 'GET_LIST_MOVIES_SUCCESS';
export const GET_LIST_MOVIES_FAILURE = 'GET_LIST_MOVIES_FAILURE';

export const getListMoviesRequest = () =>
  defaultAction(GET_LIST_MOVIES_REQUEST);

export const getListMoviesSuccess = (list) =>
  defaultAction(GET_LIST_MOVIES_SUCCESS, { list });

export const getListMoviesFailure = (error) =>
  defaultAction(GET_LIST_MOVIES_FAILURE, { error });
