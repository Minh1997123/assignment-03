import style from "./ShopPage.module.css";
import NavbarShop from "../../component/NavbarShop/NavbarShop";
import ProductList from "../../component/ProductList/ProductList";
const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
const ShopPage = function () {
  return (
    <div className={style.shop_page}>
      <header className={style.header}>
        <h1>SHOP</h1>
        <i>SHOP</i>
      </header>
      <div className={style.content}>
        <NavbarShop></NavbarShop>
        <ProductList></ProductList>
      </div>
    </div>
  );
};
export default ShopPage;
// export default ShopPage;

export const loader = async function () {
  const resQuery = await fetch(url);
  const listItem = await resQuery.json();
  return listItem;
};
