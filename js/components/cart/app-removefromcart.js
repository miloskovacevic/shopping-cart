var React = require('react');
var AppActions = require('./../../Actions/app-actions');

var RemoveFromCart = React.createClass({

    handleClick: function(){
        AppActions.removeItem(this.props.index);
    },

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>X</button>
            </div>
        );
    }
});

module.exports = RemoveFromCart;