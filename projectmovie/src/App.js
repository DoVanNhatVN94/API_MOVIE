import "./App.css";
import {Router, Switch, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import AdminPage from "./page/AdminPage/AdminPage";

import DetailPage from "./page/DetailPage/DetailPage";
import { NavAndBookTicker } from "./component/Feutures/Temp/NavAndBookTicker";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import {createBrowserHistory} from 'history'
import { UserTemplate } from "./component/Feutures/Temp/UserTemplate";

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App container-fluid">
        <Switch>
        <NavAndBookTicker exact path="/" component={HomePage} />
        <NavAndBookTicker exact path="/home" component={HomePage} />
        <NavAndBookTicker exact path="/admin" component={AdminPage} />
        <Route exact path="/detail/:id" component={DetailPage}/>
        <UserTemplate exact path="/login" component={Login}/>
        <UserTemplate exact path="/register" component={Register}/>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
