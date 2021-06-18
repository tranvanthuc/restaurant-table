import { Route, Redirect } from 'react-router-dom';
import auth from 'libs/auth';
import Layout from 'layouts/index';

export default ({ children, location, layout, ...rest }) => {
  const isAuth = !!auth.getToken();
  const LayoutTemplate = Layout(layout);

  return (
    <Route
      {...rest}
      render={() => {
        return isAuth ? (
          <LayoutTemplate>{children}</LayoutTemplate>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
};
