var React = require('react');
var AppStore = require('./../stores/app-store');

var StoreWatchMixin = function (cb) {
    return {
        getInitialState() {
            return cb(this);
        },

        componentWillMount(){
            AppStore.addChangeListener(this._onChange)
        },

        componentWillUnmount(){
            AppStore.removeChangeListener(this._onChange)
        },

        _onChange(){
            this.setState(cb(this));
        }
    };
};

module.exports = StoreWatchMixin;
