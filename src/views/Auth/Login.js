import React, { use } from 'react';
import { useHistory } from 'react-router-dom';
import auth from 'libs/auth';

export default () => {
  const history = useHistory();

  function addToken() {
    auth.setToken('abc');
    history.push('/');
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={addToken}>Add Token</button>
    </div>
  );
};
