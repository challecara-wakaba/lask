import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <p>Lask</p>} />
        <Route render={() => <p>404 Page not found.</p>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
