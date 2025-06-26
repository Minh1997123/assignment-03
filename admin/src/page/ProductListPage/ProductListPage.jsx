import ProductListItem from "../../component/ProductListItem/ProductListItem";
import style from "./ProductListPage.module.css";
import { useState } from "react";
import { redirect, useLoaderData } from "react-router";
const ProductListPage = function () {
  const loaderData = useLoaderData();
  const [listProduct, setlistProduct] = useState(loaderData);
  // tim kiem theo ten
  const searchHandler = function (event) {
    const newList = loaderData.filter((item) => {
      const isItem = item.name
        .toLowerCase()
        .search(event.target.value.toLowerCase());
      if (isItem !== -1) {
        return item;
      }
    });
    setlistProduct(newList);
  };
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h2>Products</h2>
        <input
          type="text"
          placeholder="Enter Search"
          onChange={searchHandler}
        />
      </header>
      <table className={style.content}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Categrory</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((item, index) => {
            return (
              <ProductListItem
                key={item._id}
                data={item}
                index={index}
              ></ProductListItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;

export const loader = async function () {
  const res = await fetch(`http://localhost:5000/admin/products`, {
    credentials: "include",
  });
  if (res.status === 403) {
    alert("ban khong du quyen truy cap vao muc nay");
    return redirect("/");
  }
  const resData = await res.json();
  return resData;
};
