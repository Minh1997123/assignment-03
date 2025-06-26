import Categories from "../Categories/Categories";
import NavbarShopItem from "./NabarShopItem";
import style from "./NavbarShop.module.css";
const NavbarShop = function () {
  const categories = [
    { id: 1, title: "APPLE", items: ["All"], categories: ["all"] },
    {
      id: 2,
      title: "IPHONE & MAC",
      categories: [`iphone`, "ipad", "macbook"],
      items: [`iphone`, "ipad", "Macbook"],
    },
    {
      id: 3,
      title: "WIRELESS",
      categories: [`airpod`, `watch`],
      items: [`Airpod`, `Watch`],
    },
    {
      id: 4,
      title: "OTHER",
      categories: ["mouse", "keyboard", "other"],
      items: ["Mouse", "Keyboard", "Other"],
    },
  ];
  return (
    <div className={style.navbar__shop}>
      <h1>CATEGORIES</h1>
      <ul>
        {categories.map(function ({ title, id, categories, items }) {
          return (
            <NavbarShopItem
              title={title}
              key={id}
              categories={categories}
              items={items}
            ></NavbarShopItem>
          );
        })}
      </ul>
    </div>
  );
};
export default NavbarShop;
