var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
// $(document).foundation();

// App css
//require('style!css!applicationStyles');
// require('style!css!sass!applicationStyles');


var Box = React.createClass({
    componentWillMount: function() {
        alert("component is about to mount");
    },

    componentDidMount: function() {
        alert('component did mounted');
    },

    render: function() {
        return (
            <section></section>
        );
    }
});

module.exports = Box;

