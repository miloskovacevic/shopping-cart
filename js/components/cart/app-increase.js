var React = require('react');
var AppActions = require('./../../Actions/app-actions');

var Increase = React.createClass({

    handleClick: function(){
        AppActions.increaseItem(this.props.index);
    },

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleClick}>+</button>
            </div>
        );
    }
});

module.exports = Increase;