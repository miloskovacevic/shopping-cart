var React = require('react');
var AppActions = require('./../../Actions/app-actions');

var AddToCart = React.createClass({

    handleClick: function(){
        AppActions.addItem(this.props.item);
    },

    render() {
        return (
            <div>
                <span><button  className="btn btn-success" onClick={this.handleClick}>Dodaj u korpu</button></span>
            </div>
        );
    }
});

module.exports = AddToCart;