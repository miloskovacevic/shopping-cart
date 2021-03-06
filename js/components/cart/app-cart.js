var React = require('react');
var AppActions = require('./../../Actions/app-actions');
var AppStore = require('./../../stores/app-store');
var RemoveFromCart = require('./app-removefromcart');
var Increase = require('./app-increase');
var Decrease = require('./app-decrease');

var Link = require('react-router').Link;
var StoreWatchMixin = require('./../../mixins/StoreWatchMixin');

function cartItems(){
    return {
        items: AppStore.getCart()
    }
}

var AppCart = React.createClass({
    mixins: [StoreWatchMixin(cartItems)],


    render() {
        var total = 0;
        var cartItems = this.state.items.map(function (item, i) {
            var subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                <tr key={i}>
                    <td><RemoveFromCart index={i} /></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                      <Increase index={i} />
                      <Decrease index={i} />
                    </td>
                    <td>{subtotal}</td>
                </tr>
            )
        });

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>{cartItems}</tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>{total}</td>
                      </tr>
                    </tfoot>
                </table>
                <Link to="Catalog" className="btn btn-success">Get Back</Link>
            </div>
        );
    }
});

module.exports = AppCart;