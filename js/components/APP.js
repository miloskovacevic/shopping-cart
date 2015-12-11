var React = require('react');
var AppActions = require('./../Actions/app-actions');
var Catalog = require('./catalog/app-catalog');
var AppCart = require('./cart/app-cart');
var Router = require('react-router-component');

var Locations = Router.Locations;

var APP = React.createClass({

    render() {
        return (
            <div>
                <h1>Ajmo u kupovinu!</h1>
                <Catalog />
                <AppCart />
            </div>
        );
    }
});

module.exports = APP;