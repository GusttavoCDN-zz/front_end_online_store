import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/front_end_online_store/cart" component={ Cart } />
          <Route exact path="/front_end_online_store/checkout" component={ Checkout } />
          <Route
            exact
            path="/front_end_online_store/product/:id"
            component={ ProductDetails }
          />
          <Route exact path="/front_end_online_store/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
