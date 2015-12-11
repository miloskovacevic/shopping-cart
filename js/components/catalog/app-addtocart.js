var React = require('react');
var AppActions = require('./../../Actions/app-actions');

var AddToCart = React.createClass({

    handleClick: function(){
        AppActions.addItem(this.props.item);
    },

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Dodaj u korpu</button>
            </div>
        );
    }
});

module.exports = AddToCart;