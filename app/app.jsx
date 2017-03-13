var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
// $(document).foundation();

// App css
//require('style!css!applicationStyles');
// require('style!css!sass!applicationStyles');


var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },

    edit: function() {
        this.setState({editing: true});
    },

    save: function() {
        // var val = this.refs.newText.getDOMNode().value;
        var val = this.refs.newText.value;

        alert("TODO: Save note value:->" + val);
        this.setState({editing: false});
    },

    remove: function() {
        alert('removing note');
    },

    renderDisplay: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
        );
    },

    renderForm: function() {
        return (
            <div className="note">
                <textarea ref="newText" defaultValue={this.props.children} className="form-control"/>
                <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
        )
    },

    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});


var Board = React.createClass({
    propTypes: {
        count: function(props, propName) {
            console.log('COUNT:');
            console.log('Valor o contenido de props[propName]->', props[propName]);

            console.log('Todo el Objecto Props->',props);
            console.log('El nombre de propName->',propName);

            if (typeof props[propName] !== "number") {
                return new Error('The count property must be a number');
            }

            if (props[propName] > 100) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        },

        Nombre: function(props, propName) {
            console.log('NOMBRE:');
            console.log('Valor o contenido de props[propName]->', props[propName]);

            console.log('Todo el Objecto Props->',props);
            console.log('El nombre de propName->',propName);
        }
    },

    render: function() {
        return <div className="board">{this.props.count}</div>
    }
});


React.render(<Board count={500} Nombre="Hector" Apellido="Rojas"/>,
    document.getElementById('app'));

