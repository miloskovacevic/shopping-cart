var React = require('react');
var Link = require('react-router').Link;
var AddToCart = require('./../catalog/app-addtocart');
var StoreWatchMixin = require('./../../mixins/StoreWatchMixin');
var AppStore = require('./../../stores/app-store');


function getCatalogItem(component){
    var thisItem;
    AppStore.getCatalog().forEach(function (item) {
        if(item.id.toString() === component.props.item) {
            thisItem = item;
        }
    });

    return {
        item: thisItem
    };
}

var CatalogDetail = React.createClass({
    mixins: [StoreWatchMixin(getCatalogItem)],
    render(){
        return (
            <div>
                <h2>{this.state.item.title}</h2>
                <img src={this.state.item.img} alt="" />
                <p>{this.state.item.description}</p>
                <p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
                <div className="btn-group btn-group-sm">
                    <AddToCart  item={this.state.item} />
                    <Link to="/" className="btn btn-default">Continue shopping</Link>
                </div>
            </div>

        );
    }
});

module.exports = CatalogDetail;