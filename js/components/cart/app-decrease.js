var React = require('react');
var AppActions = require('./../../Actions/app-actions');

var Decrease = React.createClass({

    handleClick: function(){
        AppActions.decreaseItem(this.props.index);
    },

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.handleClick}>-</button>
            </div>
        );
    }
});

module.exports = Decrease;