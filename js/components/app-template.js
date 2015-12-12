var React = require('react');
var Header = require('./header/app-header');
var RouteHandler = require('react-router').RouteHandler;

var Template = React.createClass({
    render(){
        return(
            <div className="container">
              <Header />
              <RouteHandler />
            </div>
        );
    }
});

module.exports = Template;