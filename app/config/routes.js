const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const Main = require('../components/Main');
const Home = require('../components/Home');
const Nav = require('../components/Navbar');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Nav} />
        <Route path='/car' component={Home}></Route>
    </Route>
  </Router>
);

module.exports = routes;
