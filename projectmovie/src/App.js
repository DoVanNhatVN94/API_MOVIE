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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import { ktNDLogin } from "./redux/action/QuanLyNguoiDung/QuanLyNguoiDung";
import { Cart } from "./component/common/Cart/Cart";

// devNam
import { AdminTemplate } from "./component/Feutures/Temp/AdminTemplate";
import AdminListFilm from "./page/AdminPage/AdminListFilm";
import AdminAddFilm from "./page/AdminPage/AdminAddFilm";
import AdminShowTime from "./page/AdminPage/AdminShowTime";
import { DetailTemplate } from "./component/Feutures/Temp/DetailTemplate";

const BookTemplateLazy = lazy(() =>
  import("./component/Feutures/Temp/BookTemplate")
);

export const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();

  const maND = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
  const checkLogin = maND === "QuanTri";
  dispatch(ktNDLogin());
  useEffect(() => {

  }, [maND]);
  console.log(checkLogin);

  return (
    <Router history={history}>
      <div className="App">
        <Switch>

          <Route exact path="/">
            {checkLogin ? <Redirect to='admin' /> : <Redirect to='home' />}
          </Route>

          <UserTemplate exact path="/login" component={Login} />
          <UserTemplate exact path="/register" component={Register} />
          <MainTemplate exact path="/home" component={HomePage} />
          <AdminTemplate exact path="/admin" component={AdminPage} />
          <DetailTemplate exact path="/detail/:id" component={DetailPage} />
          <AdminTemplate exact path="/admin/films" component={AdminListFilm} />
          <AdminTemplate exact path="/admin/films/addnew" component={AdminAddFilm} />
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
        <Cart />
        <BackTop />
      </div>
    </Router>
  );
}

export default App;
