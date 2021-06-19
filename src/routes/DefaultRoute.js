import { Route, Redirect } from 'react-router-dom';
import Layout from 'layouts/index';

export default ({ children, location, layout, ...rest }) => {
  const LayoutTemplate = Layout(layout);

  return (
    <Route
      {...rest}
      render={() => <LayoutTemplate>{children}</LayoutTemplate>}
    ></Route>
  );
};
