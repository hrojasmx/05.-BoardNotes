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
    getDefaultProps: function() {
        return {
            backgroundColor: "blue",
            height: 200,
            width: 200
        }
    },

    render: function() {
        return(
                <div>
                    <div style={this.props}></div>
                    <br />
                    <section style={this.props}></section>
                 </div>
        );
    }
});

module.exports = Box;

