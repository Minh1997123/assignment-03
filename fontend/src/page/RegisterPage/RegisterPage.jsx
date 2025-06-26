import Register from "../../component/Register/Register";
import { redirect, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const RegisterPage = function () {
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
  return <Register></Register>;
};
export default RegisterPage;

// ham tao user moi
export const action = async function ({ request }) {
  const fd = await request.formData();
  const dataUser = Object.fromEntries(fd.entries());
  const res = await fetch(`http://localhost:5000/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUser),
  });
  const resdata = await res.json();
  if (res.status === 401) {
    alert(resdata);
  }
  //   day du lieu len local
  return redirect("/login");
};
