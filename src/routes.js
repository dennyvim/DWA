import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './containers/home/Home';
import Catalog from './containers/catalog/Catalog'
import Cart from './containers/cart/Cart'
import Personalize from './containers/personalize/Personalize';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalogo" component={Catalog} />
            <Route path="/personalizar" component={Personalize}/>
            <Route path="/carrito" component={Cart}/>
        </Switch>
    );
}

export default Router;