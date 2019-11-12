import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';


import HomePage from '../src/components/pages/hompage/homepage.component';

const HatPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
