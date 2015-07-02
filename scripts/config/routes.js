var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Main = require('../components/Main.react');
var Welcome = require('../components/Welcome.react');

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <DefaultRoute handler={Welcome} />
    </Route>
);
