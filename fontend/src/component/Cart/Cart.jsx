import { Link } from "react-router";
import style from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { numberToStringHandler } from "../../store/Slice";
const Cart = function () {
  const { listCart, total } = useSelector((state) => state.listCart);
  return (
    <div className={style.cart}>
      <div className={style.header}>
        <h1>CART</h1>
        <i>CART</i>
      </div>
      <h2>SHOPPING CART</h2>
      <div className={style.content}>
        <div className={style.cart__items}>
          <div className={style.items__title}>
            <h5>IMAGE</h5>
            <h5>PRODUCT</h5>
            <h5>PRICE</h5>
            <h5>QUANTITY</h5>
            <h5>TOTAL</h5>
            <h5>REMOVE</h5>
          </div>
          <ul>
            {listCart.map(function (item) {
              return <CartItem itemData={item} key={item.data._id}></CartItem>;
            })}
          </ul>
          <div className={style.items__button}>
            <Link to="/shop">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
              </svg>
              Continue Shopping
            </Link>
            <Link to="/checkout">
              Proceed to checkout
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className={style.cart__total}>
          <h2>CART TOTAL</h2>
          <div className={style.total}>
            <h3>SUBTOTAL</h3>
            <i>{numberToStringHandler(total)} VND</i>
          </div>
          <div className={style.total}>
            <h3>TOTAL</h3>
            <h3>{numberToStringHandler(total)} VND</h3>
          </div>
          <input placeholder="Enter your coupon"></input>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z" />
            </svg>
            Apply coupon
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
