import "./App.css";
import { BackTop } from 'antd';
import { Router, Switch, Redirect } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import AdminPage from "./page/AdminPage/AdminPage";

import DetailPage from "./page/DetailPage/DetailPage";
import { MainTemplate } from "./component/Feutures/Temp/MainTemplate";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import { createBrowserHistory } from "history";
import { UserTemplate } from "./component/Feutures/Temp/UserTemplate";
import Modal from "./component/common/Modal";
import BookMovie from "./page/BookMovie/BookMovie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ktNDLogin } from "./redux/action/QuanLyNguoiDung/QuanLyNguoiDung";
import { Cart } from "./component/common/Cart/Cart";

// devNam
import { AdminTemplate } from "./component/Feutures/Temp/AdminTemplate";
import AdminListFilm from "./page/AdminPage/AdminListFilm";
import AdminAddFilm from "./page/AdminPage/AdminAddFilm";


export const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();

  const { thongTinND } = useSelector((state) => state.UserReducer);
  const ktLogin = thongTinND.maLoaiNguoiDung === "QuanTri";

  useEffect(() => {
    dispatch(ktNDLogin());
  }, []);

  return (
    <Router history={history}>
      <div className="App container-fluid">
        <Switch>
          <Redirect from="home" to="/" exact />
          <MainTemplate
            exact
            path="/"
            component={ktLogin ? AdminPage : HomePage}
          />
          <MainTemplate exact path="/home" component={HomePage} />
          <MainTemplate exact path="/admin" component={AdminPage} />
          <MainTemplate exact path="/detail/:id" component={DetailPage} />
          <MainTemplate exact path="/bookmovie/:id" component={BookMovie} />
          <UserTemplate exact path="/login" component={Login} />
          <UserTemplate exact path="/register" component={Register} />

          <AdminTemplate exact path="/admin/films" component={AdminListFilm} />

          <AdminTemplate exact path="/admin/films/addnew" component={AdminAddFilm} />
        </Switch>
        <Modal />
        <Cart />
        <BackTop />
      </div>
    </Router>
  );
}

export default App;
