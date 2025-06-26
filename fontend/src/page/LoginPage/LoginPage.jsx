import Login from "../../component/Login/Login";
import { onLogin } from "../../store/Slice";
import store from "../../store/store";
import { redirect, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const LoginPage = function () {
  const navigate = useNavigate();
  const userCurrent = useSelector((state) => state.login);
  useEffect(
    function () {
      // chuyen ve trang chu khi da co nguoi dang nhap
      if (userCurrent.isLogin) {
        navigate("/");
      }
    },
    [userCurrent, navigate]
  );
  return <Login></Login>;
};
export default LoginPage;

export const action = async function ({ request }) {
  // lay thong tin tu local va tu form
  const fd = await request.formData();
  const dataUser = Object.fromEntries(fd.entries());
  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // batr buoc co de nhan va gui cockie
    body: JSON.stringify(dataUser),
  });
  const resData = await res.json();
  if (res.status === 200) {
    //   day du lieu len local va set state redux
    store.dispatch(onLogin(resData));
    return redirect("/");
  }
  alert(resData);
};
