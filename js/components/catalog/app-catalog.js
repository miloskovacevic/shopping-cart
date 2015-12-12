var React = require('react');
var AppActions = require('./../../Actions/app-actions');
var AppStore = require('./../../stores/app-store');
var AddToCart = require('./app-addtocart');
var CatalogItem = require('./app-catalogitem');
var StoreWatchMixin = require('./../../mixins/StoreWatchMixin');


function getCatalog(){
return {
          items: AppStore.getCatalog()
       }
}

var Catalog = React.createClass({

    mixins: [StoreWatchMixin(getCatalog)],

    render() {
        var items = this.state.items.map(function(item, i){
            return <CatalogItem item={item} />
        });

        return (
           <div className="row">
               {items}
           </div>
        );
    }
});

module.exports = Catalog;