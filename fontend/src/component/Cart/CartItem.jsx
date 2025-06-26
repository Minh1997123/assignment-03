import style from "./CartItem.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateCart,
  deleteCart,
  numberToStringHandler,
} from "../../store/Slice";
const CartItem = function (props) {
  const { photos, name, price } = props.itemData.data;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(props.itemData.quantity);
  const total = quantity * price;
  const item = {
    data: props.itemData.data,
    quantity: quantity,
  };
  // ham tang so luong them 1
  const incrementHandler = function () {
    setQuantity((pre) => pre + 1);
  };
  // ham giam so luong di 1
  const decrementHadler = function () {
    setQuantity((pre) => pre - 1);
  };
  // ham xoa san pham
  const deleteItemHandler = function () {
    setQuantity(0);
  };
  useEffect(
    function () {
      const patchUpdateCart = async function () {
        const res = await fetch("http://localhost:5000/update-cart", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(item),
        });
        if (res.status === 200) {
          if (quantity < 1) {
            // xoa san pham khi chinh so luong ve 0
            dispatch(deleteCart(item));
            return;
          }
          // cap nhap lai so luong
          dispatch(updateCart(item));
          return;
        }
      };
      patchUpdateCart();
    },
    [quantity]
  );
  return (
    <li className={style.cart__item}>
      <img src={photos[0]} alt="name"></img>
      <h3>{name}</h3>
      <i>{numberToStringHandler(price)} VND</i>
      <div>
        <button onClick={decrementHadler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
          </svg>
        </button>
        <span>{quantity}</span>
        <button onClick={incrementHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
          </svg>
        </button>
      </div>
      <i>{numberToStringHandler(total)} VND</i>
      <button onClick={deleteItemHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
        </svg>
      </button>
    </li>
  );
};
export default CartItem;
