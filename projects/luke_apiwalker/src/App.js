import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Main from './views/main';
import Planet from './views/planets';
import People from './views/people';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
        <Switch>
          <Route exact path="/"> </Route>
          <Route exact path="/planets/:id"> <Planet/> </Route>
          <Route exact path="/people/:id"> <People/> </Route>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
