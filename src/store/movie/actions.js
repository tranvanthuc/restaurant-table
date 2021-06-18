import {
  GET_LIST_MOVIES_FAILURE,
  GET_LIST_MOVIES_REQUEST,
  GET_LIST_MOVIES_SUCCESS,
} from './type';
import { defaultAction } from 'libs/store';

export const getListMoviesRequest = () =>
  defaultAction(GET_LIST_MOVIES_REQUEST);

export const getListMoviesSuccess = (list) =>
  defaultAction(GET_LIST_MOVIES_SUCCESS, { list });

export const getListMoviesFailure = (error) =>
  defaultAction(GET_LIST_MOVIES_FAILURE, { error });
