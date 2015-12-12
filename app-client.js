var React = require('react');
var ReactDOM = require('react-dom');

var Template = require('./js/components/app-template');
var Catalog = require('./js/components/catalog/app-catalog');
var AppCart = require('./js/components/cart/app-cart');
var CatalogDetail = require('./js/components/product/app-catalogdetail');
var Greska = require('./js/components/catalog/app-greska');


var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

/*<DefaultRoute handler={Catalog} />*/
var routes = (
    <Route handler={Template}>
        <DefaultRoute name="Catalog" handler={Catalog} />
        <Route name="AppCart" path="cart" handler={AppCart}></Route>
        <Route name="Item" path="item/:item" handler={CatalogDetail}></Route>
        <NotFoundRoute handler={Greska} />
    </Route>
);

//routes configured, render components...
Router.run(routes, function (Handler) {
    ReactDOM.render(
        <Handler />,
        document.getElementById('react-container')
    );
});



