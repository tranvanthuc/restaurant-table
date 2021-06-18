import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from 'views/Movie';
import PageNotFound from 'views/Common/PageNotFound';
import Home from 'views/Home/index';
import Login from 'views/Auth/Login';
import PrivateRoute from './PrivateRoute';
import NotLoggedInRoute from './NotLoggedInRoute';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/movie">
        <Movie />
      </Route>
      <PrivateRoute layout="auth" exact path="/">
        <Home />
      </PrivateRoute>

      <NotLoggedInRoute path="/login">
        <Login />
      </NotLoggedInRoute>

      <Route path="*" status={404}>
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
);
