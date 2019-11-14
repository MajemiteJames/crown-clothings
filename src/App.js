import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';


import HomePage from '../src/components/pages/hompage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
