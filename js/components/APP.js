var React = require('react');
var AppActions = require('./../Actions/app-actions');

var APP = React.createClass({

    handleClick: function(){
        var naslov = this.refs.testPrimjer.value;
        AppActions.addItem(naslov);
    },

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Neki naslov</h1>
                <input ref="testPrimjer" type="text" placeholder="test-primjer" />
            </div>
        );
    }
});

module.exports = APP;