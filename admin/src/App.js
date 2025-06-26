import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import SideBar from "./component/SideBar/SideBar";
import ProductListPage, {
  loader as ProductListloader,
} from "./page/ProductListPage/ProductListPage.jsx";
import ChatPage from "./page/ChatPage/ChatPage.jsx";
import LoginPage, { action as loginAction } from "./page/login/LoginPage.jsx";

import store from "./store/store.js";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar></SideBar>,
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
      {
        path: "/product-list",
        element: <ProductListPage></ProductListPage>,
        loader: ProductListloader,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
        action: loginAction,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
