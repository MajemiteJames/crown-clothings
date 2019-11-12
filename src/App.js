import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';


import HomePage from '../src/components/pages/hompage/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
