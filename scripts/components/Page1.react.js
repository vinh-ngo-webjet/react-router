var React = require('react');
var Link = require('react-router').Link;

var Page1 = React.createClass({
    render: function(){
        return (
            <div>
                <p>Welcome to Page 1!</p>
                <p>Back to <Link to="/">Welcome page</Link></p>
            </div>
        );
    }
});

module.exports = Page1;