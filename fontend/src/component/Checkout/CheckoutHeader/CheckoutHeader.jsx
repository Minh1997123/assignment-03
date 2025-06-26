import { NavLink } from "react-router";
import style from "./CheckoutHeader.module.css";
const CheckoutHeader = function () {
  return (
    <header className={style.header}>
      <h1>CHECKOUT</h1>
      <div>
        <NavLink to="/">HOME</NavLink>/<NavLink to="/cart">CART</NavLink>/
        <NavLink className={({ isActive }) => isActive && style.active}>
          CHECKOUT
        </NavLink>
      </div>
    </header>
  );
};
export default CheckoutHeader;
