import style from "./CheckoutTotal.module.css";
import { useSelector } from "react-redux";
import { numberToStringHandler } from "../../../store/Slice";
const CheckoutTotal = function () {
  const { listCart, total } = useSelector((state) => state.listCart);

  return (
    <div className={style.checkout__total}>
      <h3>YOUR ORDER </h3>
      {listCart.map(function (item) {
        return (
          <div className={style.item} key={item.data._id}>
            <h5>{item.data.name}</h5>
            <i>{`${numberToStringHandler(item.data.price)} VND X ${
              item.quantity
            }`}</i>
          </div>
        );
      })}
      <div className={style.total}>
        <h5>TOTAL</h5>
        <p>{numberToStringHandler(total)} VND</p>
      </div>
    </div>
  );
};
export default CheckoutTotal;
