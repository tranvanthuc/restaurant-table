import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from 'views/Movie';
import PageNotFound from 'views/Common/PageNotFound';
import Home from 'views/Home/index';
import SearchTable from 'views/SearchTable/index';
import Login from 'views/Auth/Login';
// import PrivateRoute from './PrivateRoute';
import DefaultRoute from './DefaultRoute';
import NotLoggedInRoute from './NotLoggedInRoute';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/movie">
        <Movie />
      </Route>
      <DefaultRoute layout="auth" exact path="/">
        <Home />
      </DefaultRoute>

      <DefaultRoute layout="auth" exact path="/search">
        <SearchTable />
      </DefaultRoute>

      <NotLoggedInRoute path="/login">
        <Login />
      </NotLoggedInRoute>

      <Route path="*" status={404}>
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
);
