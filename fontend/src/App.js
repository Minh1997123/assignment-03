import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./component/Layout/Layout";
import HomePage, { loader as loaderHome } from "./page/HomePage/HomePage";
import ShopPage, { loader as loaderShop } from "./page/ShopPage/ShopPage";
import RegisterPage, {
  action as actionRegister,
} from "./page/RegisterPage/RegisterPage";
import LoginPage, { action as actionLogin } from "./page/LoginPage/LoginPage";
import CartPage from "./page/CartPage/CartPage";
import CheckoutPage, {
  action as checkoutAction,
} from "./page/CheckoutPage/CheckoutPage";
import DetailPage, {
  loader as loaderDetail,
} from "./page/DetailPage/DeatilPage";
import OderListPage, {
  loader as oderListLoader,
} from "./page/OderListPage/OderListPage";
import OderDetailPage, {
  loader as oderDetailLoader,
} from "./page/OderDetailPage/OderDetailPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onLogin, getListCart } from "./store/Slice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage>, loader: loaderHome },
      {
        path: "shop",
        element: <ShopPage></ShopPage>,
        loader: loaderShop,
      },
      {
        path: "detail/:productId",
        element: <DetailPage></DetailPage>,
        loader: loaderDetail,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
    action: checkoutAction,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
    action: actionRegister,
  },
  { path: "/login", element: <LoginPage></LoginPage>, action: actionLogin },
  {
    path: "/oder/:oderId",
    element: <OderDetailPage></OderDetailPage>,
    loader: oderDetailLoader,
  },
  {
    path: "/oder-list",
    element: <OderListPage></OderListPage>,
    loader: oderListLoader,
  },
]);
function App() {
  const dispatch = useDispatch();
  useEffect(function () {
    const getLogin = async function () {
      // lay thong tin nguoi dung da dang nhap khi lan dau vao web
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
      });
      const resData = await res.json();
      if (res.status === 200) {
        dispatch(onLogin(resData));
        dispatch(getListCart(resData.carts));
      }
    };
    getLogin();
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
