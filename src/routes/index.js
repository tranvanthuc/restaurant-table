import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Movie from 'views/Movie';
import PageNotFound from 'views/Common/PageNotFound';
import Home from 'views/Home/index';
import SearchTable from 'views/SearchTable/index';
import DiningTable from 'views/DiningTable';
import Login from 'views/Auth/Login/index';
import Register from 'views/Auth/Register/index';
// import PrivateRoute from './PrivateRoute';
import DefaultRoute from './DefaultRoute';
// import NotLoggedInRoute from './NotLoggedInRoute';

export default () => (
  <Router>
    <Switch>
      <DefaultRoute layout="auth" exact path="/">
        <Home />
      </DefaultRoute>

      <DefaultRoute layout="auth" exact path="/search">
        <SearchTable />
      </DefaultRoute>

      <DefaultRoute layout="auth" exact path="/dining">
        <DiningTable />
      </DefaultRoute>

      <DefaultRoute layout="auth" path="/login">
        <Login />
      </DefaultRoute>

      <DefaultRoute layout="auth" path="/register">
        <Register />
      </DefaultRoute>

      <Route path="*" status={404}>
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
);
