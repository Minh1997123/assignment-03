import CheckoutHeader from "../../component/Checkout/CheckoutHeader/CheckoutHeader";
import CheckoutTotal from "../../component/Checkout/CheckoutTotal/CheckoutTotal";
import CheckoutForm from "../../component/Checkout/CheckoutDetail/CheckoutForm";
import style from "./CheckoutPage.module.css";
import store from "../../store/store";
import { deleteCart } from "../../store/Slice";
import { redirect } from "react-router";

const CheckoutPage = function () {
  return (
    <div className={style.checkoutpage}>
      <CheckoutHeader></CheckoutHeader>
      <h2>BILLING DETAILS</h2>
      <div className={style.content}>
        <CheckoutForm></CheckoutForm>
        <CheckoutTotal></CheckoutTotal>
      </div>
    </div>
  );
};
export default CheckoutPage;

export const action = async function ({ request }) {
  const formData = await request.formData();
  const reqData = Object.fromEntries(formData.entries());
  const { listCart, total } = store.getState().listCart;
  const newListCart = listCart.map((item) => {
    const newItem = {
      productId: item.data._id,
      qty: item.quantity,
    };
    return newItem;
  });
  const newReqData = {
    ...reqData,
    products: newListCart,
    total: total,
  };
  const res = await fetch("http://localhost:5000/add-oder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(newReqData),
  });
  if (res.status === 200) {
    listCart.map((item) => {
      store.dispatch(deleteCart(item));
    });
    return redirect("/oder-list");
  }
};
