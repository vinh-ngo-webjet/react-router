var React = require('react');
var Link = require('react-router').Link;
var Welcome = React.createClass({
    render: function(){
        return (
            <div>
                <p>Welcome to my React SPA!</p>
                <p>Go to <Link to="page1">page 1</Link></p>
            </div>
        );
    }
});

module.exports = Welcome;