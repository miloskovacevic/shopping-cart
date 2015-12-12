var React = require('react');
var Link = require('react-router').Link;

var CartSummary = React.createClass({
    render(){
        return(
            <div>
              <Link to="AppCart" className="btn btn-success">Cart Items: QTY / $COST</Link>
            </div>

        );
    }
});

module.exports = CartSummary;