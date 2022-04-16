import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import AdminPage from "./page/AdminPage/AdminPage";

import DetailPage from "./page/DetailPage/DetailPage";
import { NavAndBookTicker } from "./component/Feutures/Temp/NavAndBookTicker";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import  'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <NavAndBookTicker exact path="/" component={HomePage} />
        <NavAndBookTicker exact path="/home" component={HomePage} />
        <NavAndBookTicker exact path="/admin" component={AdminPage} />
        <Route exact path="/detail/:id" component={DetailPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
