import './App.css';
import Main from './views/main';
import New from './views/new';
import Edit from './views/edit';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="navbar navbar-light bg-light"> Favorite Authors</div>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/new">
            <New/>
          </Route>

          <Route exact path="/:_id/edit">
            <Edit/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
