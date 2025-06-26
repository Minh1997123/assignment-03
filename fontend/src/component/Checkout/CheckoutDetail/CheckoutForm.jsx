import style from "./CheckoutForm.module.css";
import { Form } from "react-router";
const CheckoutForm = function () {
  return (
    <Form className={style.form} method="POST">
      <label htmlFor="useName">FULL NAME</label>
      <input
        type="text"
        id="useName"
        name="useName"
        placeholder="Enter Your Full Name Here!"
        required
      />
      <label htmlFor="eamil">EMAIL</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email Here!"
        required
      />
      <label htmlFor="phoneNumber">PHONE NUMBER</label>
      <input
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter Your Phone Number Here!"
        required
      />
      <label htmlFor="address">ADDRESS</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Enter Your Address Here!"
        required
      />
      <button>Place order</button>
    </Form>
  );
};
export default CheckoutForm;
