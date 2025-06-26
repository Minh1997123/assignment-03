import { Link, Form } from "react-router";
import style from "./Login.module.css";
import NavBar from "../Layout/NavBar/NavBar";
import { useActionData } from "react-router";
import { useRef } from "react";
const Login = function () {
  const dataAction = useActionData();
  const input = useRef();
  // xoa password khi nhap sai
  if (input.current && !dataAction) {
    input.current.value = "";
  }

  // input.current.value = 1;
  return (
    <div className={style.background}>
      <div className={style.navbar}>
        <NavBar></NavBar>
      </div>
      <Form className={style.form} action="/login" method="POST">
        <h1>Sign In</h1>
        <div className={style.form__input}>
          <input type="email" placeholder="Email" required name="email" />
          <input
            ref={input}
            type="password"
            placeholder="Password"
            required
            name="password"
          />
        </div>
        <button>SIGN IN</button>
        <p>
          Create an account? <Link to="/register">Sign Up</Link>
        </p>
      </Form>
    </div>
  );
};
export default Login;
