import './App.css';
import Main from './views/main';
import Home from './views/home';
import Num from './views/Number';
import Word from './views/word';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Main/> </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/:word">
            <Word />
          </Route>

          <Route exact path="/:word/:bgc/:col">
            <Word />
          </Route>



        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
