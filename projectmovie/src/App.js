import "./App.css";
import { BackTop, Button, Space } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Router, Switch, Route, Redirect } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { Suspense, lazy } from "react";
import { ktNDLogin } from "./redux/action/QuanLyNguoiDung/QuanLyNguoiDung";

// devNam
import { AdminTemplate } from "./component/Feutures/Temp/AdminTemplate";
// import AdminPage from "./page/AdminPage/AdminPage";
import AdminListFilm from "./page/AdminPage/AdminListFilm";
import AdminAddFilm from "./page/AdminPage/AdminAddFilm";
import AdminEditFilm from "./page/AdminPage/AdminEditFilm";

import AdminShowTime from "./page/AdminPage/AdminShowTime";
import QuanLyNguoiDungAD from "./page/AdminPage/QuanLyNguoiDungAD";
import AdminEditUser from "./page/AdminPage/AdminEditUser";
import AdminAddUser from "./page/AdminPage/AdminAddUser";

import { DetailTemplate } from "./component/Feutures/Temp/DetailTemplate";
import Loading from "./component/Loading/Loading";

const BookTemplateLazy = lazy(() =>
  import("./component/Feutures/Temp/BookTemplate")
);

export const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();
  const style = {
    height: 40,
    width: 40,

    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: 'wheat',
    color: '#fff',
    textAlign: 'center',

    fontSize: 14,
  };

  const maND = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
  const checkLogin = maND === "QuanTri";
  dispatch(ktNDLogin());

  return (
    <Router history={history}>
      <div className="App">
        <Loading />
        <Switch>
          <Route exact path="/">
            {checkLogin ? <Redirect to="admin" /> : <Redirect to="home" />}
          </Route>

          <UserTemplate exact path="/login" component={Login} />
          <UserTemplate exact path="/register" component={Register} />
          <MainTemplate exact path="/home" component={HomePage} />
          <AdminTemplate exact path="/admin" component={AdminPage} />
          <DetailTemplate exact path="/detail/:id" component={DetailPage} />
          <AdminTemplate exact path="/admin/films" component={AdminListFilm} />

          <AdminTemplate exact path="/admin/films/addnew" component={AdminAddFilm} />
          <AdminTemplate exact path="/admin/films/edit/:id" component={AdminEditFilm} />
          <AdminTemplate exact path="/admin/user/edit/:id" component={AdminEditUser} />
          <AdminTemplate exact path="/admin/user/addnew" component={AdminAddUser} />
          <AdminTemplate exact path="/admin/films/showtime/:id" component={AdminShowTime} />
          <AdminTemplate exact path="/admin/user" component={QuanLyNguoiDungAD} />

          <Suspense
            fallback={
              <Space style={{ width: "100%" }}>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
              </Space>
            }
          >
            <BookTemplateLazy
              exact
              path="/bookmovie/:id"
              component={BookMovie}
            />
          </Suspense>
        </Switch>
        <Modal />

<BackTop>
<div style={style}>UP</div>
</BackTop>
        

      </div>
    </Router>
  );
}

export default App;
