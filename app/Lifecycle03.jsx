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
        colorIndex : -1
    },

    getInitialState: function() {
        return {
            backgroundColor: "blue",
            height: 200,
            width: 200
        }
    },

    update: function() {
        this.setProps({colorIndex: this.props.colorIndex + 1});
    },

    componentWillReceiveProps: function(nextProps) {
        //          0        1        2        3
        // colors="Red,DarkMagenta,Salmon,Chartreuse"

        var color = this.props.colors.split(',')[nextProps.colorIndex];

        if(!color) {
            this.setProps({colorIndex:0});
        }

        this.setState({backgroundColor: color});
    },

    render: function() {
        return(
                <section style={this.state} onClick={this.update}></section>
        );
    }
});

module.exports = Box;

