var React = require('react');
var AppActions = require('./../../Actions/app-actions');
var AppStore = require('./../../stores/app-store');
var AddToCart = require('./app-addtocart');

function getCatalog(){
return {
          items: AppStore.getCatalog()
       }
}

var Catalog = React.createClass({
    getInitialState() {
       return getCatalog();
    },

    render() {
        var items = this.state.items.map(function(item,i){
            return <tr key={i}>
                     <td>{item.title}</td>
                     <td>${item.cost}</td>
                     <td><AddToCart  item={item}/></td>
                   </tr>
        });

        return (
           <table className="table table-hover">
               {items}
           </table>
        );
    }
});

module.exports = Catalog;