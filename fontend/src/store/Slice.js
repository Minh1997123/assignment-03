import { createSlice } from "@reduxjs/toolkit";
// slice cua popup
export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isShowPopup: false,
    popupData: {
      name: "",
      price: "",
      shortDesc: "",
      src: "",
    },
  },
  reducers: {
    // Action show  popup
    SHOW_POPUP: (state, action) => {
      return {
        isShowPopup: true,
        popupData: action.payload.data,
      };
    },
    // Action hide popup
    HIDE_POPUP: (state) => {
      return {
        isShowPopup: false,
        popupData: {
          name: "",
          price: "",
          shortDesc: "",
          src: "",
        },
      };
    },
  },
});
// slice cua category shop
export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "all",
  },
  reducers: {
    // set category khi chon o shop
    setCategory: (state, action) => {
      return {
        category: action.payload,
      };
    },
  },
});
// slice cua login
const loginSlice = createSlice({
  name: "Login",
  initialState: {
    isLogin: false,
    userCurrent: null,
  },
  reducers: {
    // day du lieu len local va set state redux
    onLogin: (state, action) => {
      return {
        isLogin: true,
        userCurrent: action.payload,
      };
    },
    // logout va xoa du lieu tren local
    onLogout: () => {
      return {
        isLogin: false,
        userCurrent: null,
      };
    },
  },
});
// ham tim kiem va cap nhap so luong sp cua listCart
const findItemHandler = function (listCart, itemDetail) {
  const hasItem = listCart.find(function (item) {
    return itemDetail.data._id === item.data._id;
  });
  return hasItem;
};

// ham tao ra ListItem moi cho listCarrt
const getNewListItemHandler = function (listCart, hasItem, newQuantity) {
  // tao san pham moi voi so luong moi
  const newItem = { ...hasItem, quantity: newQuantity };
  // tao danh sach cart moi
  const newListItem = listCart.map(function (item) {
    // thay the san pham cu bang san pham co so luong moi
    if (newItem.data._id === item.data._id) {
      return newItem;
    }
    return item;
  });
  return newListItem;
};
// tinh tong tien cua listCart
const getNewListCart = function (listCart) {
  // tao mang tong gia tri cart
  const totalArr = listCart.map(function (item) {
    const { data, quantity } = item;
    const totalItem = data.price * quantity;
    return totalItem;
  });
  // tinh tong so tien cua list Cart
  const newTotal = totalArr.reduce((acc, curr) => acc + curr, 0);
  const newListCart = {
    listCart: listCart,
    total: newTotal,
  };
  return newListCart;
};
// slice cua listCart
const listCartSlice = createSlice({
  name: "listCart",
  initialState: {
    listCart: [],
    total: 0,
  },
  reducers: {
    // ham them san pham moi
    addCart: (state, action) => {
      const itemDetail = action.payload;
      const listCart = state.listCart;
      // tim san pham dang them vao
      const hasItem = findItemHandler(listCart, itemDetail);
      // neu chua co thi them san pham vao danh sach cart
      if (!hasItem) {
        const listCartCurrent = [...listCart, itemDetail];
        // tinh tong so tien va tao state moi
        const newListCart = getNewListCart(listCartCurrent);
        return newListCart;
      }
      // neu da co thi cong them so luong da dinh
      const newQuantity = itemDetail.quantity + hasItem.quantity;
      // tao danh sach cart moi
      const newListItem = getNewListItemHandler(listCart, hasItem, newQuantity);
      // tinh tong so tien va tao state moi
      const newListCart = getNewListCart(newListItem);
      return newListCart;
    },
    // ham update lai so luong cart item
    updateCart: (state, action) => {
      const itemDetail = action.payload;
      const listCart = state.listCart;
      // kiem tra san pham dang thay doi
      const hasItem = findItemHandler(listCart, itemDetail);
      // neu da co thi cong them so luong da dinh
      const newQuantity = itemDetail.quantity;
      // tao danh sach cart moi
      const newListItem = getNewListItemHandler(listCart, hasItem, newQuantity);
      // tinh tong so tien va tao state moi
      const newListCart = getNewListCart(newListItem);
      return newListCart;
    },
    // ham xoa cart item
    deleteCart: (state, action) => {
      const itemDetail = action.payload;
      const listCart = state.listCart;
      // kiem tra san pham dang thay doi
      const hasItem = findItemHandler(listCart, itemDetail);
      // tao danh sach cart moi
      const newListItem = listCart.filter(function (item) {
        // loai bo san pham da xoa khoi danh sach
        return hasItem.data._id !== item.data._id;
      });
      // tinh tong so tien va tao state moi
      const newListCart = getNewListCart(newListItem);
      return newListCart;
    },
    // ham luu listCart tu local vao state
    getListCart: (state, action) => {
      const carts = action.payload;
      let total = 0;
      const newListCart = carts.map((item) => {
        const product = item.productId;
        total = product.price * item.qty + total;
        const newItem = {
          data: product,
          quantity: item.qty,
        };
        return newItem;
      });
      const newCarts = {
        listCart: newListCart,
        total: total,
      };
      return newCarts;
    },
  },
});
// state ve popup
export const { SHOW_POPUP, HIDE_POPUP } = popupSlice.actions;
export const showPopupReducer = popupSlice.reducer;

// state ve category
export const { setCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;

// state ve login
export const { onLogin, onLogout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
// state ve cart
export const { addCart, updateCart, deleteCart, getListCart } =
  listCartSlice.actions;
export const listCartReducer = listCartSlice.reducer;

// ham dung de chuyen doi tu so sang chuoi de hien thi
export const numberToStringHandler = function (number) {
  let stringNumber = number.toString();
  // lay 3 so cuoi
  const numberCurrent = stringNumber.slice(-3);
  // tao chuoi so moi de dung de quy
  stringNumber = stringNumber.slice(0, -3);
  // neu la nhung so lon nhat thi tra ra so do va thoat de quy
  if (!stringNumber) {
    return numberCurrent;
  }
  // tra ra chuoi so tu so ban dau
  const newStringNumber =
    numberToStringHandler(Number(stringNumber)) + "." + numberCurrent;
  return newStringNumber;
};
