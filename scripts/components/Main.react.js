var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Menu</h2>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = Main;