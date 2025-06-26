import { configureStore } from "@reduxjs/toolkit";
import {
  showPopupReducer,
  categoryReducer,
  loginReducer,
  listCartReducer,
} from "./Slice";

const store = configureStore({
  reducer: {
    popup: showPopupReducer,
    category: categoryReducer,
    login: loginReducer,
    listCart: listCartReducer,
  },
});
export default store;
