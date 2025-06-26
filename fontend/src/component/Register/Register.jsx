import { Link, Form } from "react-router";
import NavBar from "../Layout/NavBar/NavBar";
import style from "./Register.module.css";
const Register = function () {
  return (
    <div className={style.background}>
      <div className={style.navbar}>
        <NavBar></NavBar>
      </div>
      <Form className={style.form} method="POST" action="/register">
        <h1>Sign Up</h1>
        <div className={style.form__input}>
          <input type="text" placeholder="Full Name" name="fullName" required />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            required
            minLength="9"
            name="password"
          />
          <input
            type="number"
            placeholder="Phone"
            name="phoneNumber"
            required
          />
        </div>
        <button>SIGN UP</button>
        <p>
          Login? <Link to="/login">Click</Link>
        </p>
      </Form>
    </div>
  );
};
export default Register;
