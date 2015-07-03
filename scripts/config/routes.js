var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Main = require('../components/Main.react');
var Welcome = require('../components/Welcome.react');
var Page1 = require('../components/Page1.react');

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="page1" path="page1" handler={Page1} />
        <DefaultRoute handler={Welcome} />
    </Route>
);
