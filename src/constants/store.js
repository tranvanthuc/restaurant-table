export const DEFAULT_STATE = {
  loading: false,
  error: null,
  message: '',
  status: false,
};

export const DEFAULT_REQUEST = {
  ...DEFAULT_STATE,
  loading: true,
};

export const DEFAULT_SUCCESS = {
  ...DEFAULT_STATE,
  status: true,
  loading: false,
};

export const DEFAULT_FAILURE = {
  ...DEFAULT_STATE,
  status: false,
  loading: false,
};
