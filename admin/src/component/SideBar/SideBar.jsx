import { Outlet, Link, useLocation, useNavigate, redirect } from "react-router";
import style from "./SideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "../../store/slices";
import { useEffect } from "react";
import store from "../../store/store";

const SideBar = function () {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(
    function () {
      const loginHandler = async function () {
        const res = await fetch("http://localhost:5000/admin/login", {
          method: "POST",
          credentials: "include",
        });
        const resData = await res.json();
        if (res.status === 200) {
          dispatch(login(resData.email));
        }
      };
      loginHandler();
      if (auth.isLogin && location.pathname === "/login") {
        navigate("/");
      }
      if (!auth.isLogin) {
        navigate("/login");
      }
    },
    [auth.isLogin]
  );
  const logOutHandler = async function () {
    const res = await fetch("http://localhost:5000/admin/logout", {
      method: "POST",
      credentials: "include",
    });
    if (res.status === 200) {
      dispatch(logout());
      navigate("/login");
    }
  };
  return (
    <div className={style.layout}>
      <h1>Admin Page</h1>
      <span></span>
      <nav className={style.sidebar}>
        {!auth.isLogin ? (
          <Link to="/login">
            <button>Login</button>
          </Link>
        ) : (
          <>
            <h4>LIST</h4>
            <Link to="/">Chat</Link>
            <Link to="/product-list">Product List</Link>
            <h4>USER</h4>
            <button onClick={logOutHandler}>Logout</button>
          </>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SideBar;
