import { useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import style from "./ProductList.module.css";
const ProductList = function () {
  const [listItemCurrent, setListItemCurrent] = useState([]);
  const { category } = useSelector((state) => state.category);
  const listItem = useLoaderData();
  useEffect(
    function () {
      // lay toan bo san pham khi nguoi dung chon all
      if (category === "all") {
        setListItemCurrent(listItem);
        return;
      }
      //   lay danh sach san pham theo lua chon
      const list = listItem.filter(function (item) {
        return item.category === category;
      });
      setListItemCurrent(list);
    },
    [category, listItem]
  );
  return (
    <div className={style.product__list}>
      <div className={style.product__list__header}>
        <input type="text" placeholder="Enter Search Here!" />
        <select>
          <option value="">Default sorting</option>
          <option value="hight">hight</option>
          <option value="low">low</option>
        </select>
      </div>
      <div>
        <ul>
          {listItemCurrent.map(function (item) {
            return (
              <ProductListItem
                name={item.name}
                src={item.img1}
                price={item.price}
                id={item._id.$oid}
                key={item._id.$oid}
              ></ProductListItem>
            );
          })}
        </ul>
        <div className={style.product__list__results}>
          <div className={style.product__list__button}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
              </svg>
            </button>
            <span>1</span>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
              </svg>
            </button>
          </div>
          <div>Showing 1-9 of 9 results</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
