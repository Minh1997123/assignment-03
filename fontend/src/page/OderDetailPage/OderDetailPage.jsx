import { useLoaderData } from "react-router";
import { numberToStringHandler } from "../../store/Slice";
import style from "./OderDetailPage.module.css";
const OderDetailPage = function () {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className={style.container}>
      <header className={style.heder}>
        <h1>INFORMATION ORDER</h1>
        <span>ID User : {loaderData.userId}</span>
        <span>Full Name : {loaderData.useName}</span>
        <span>Phone : {loaderData.phoneNumber}</span>
        <span>Address : {loaderData.address}</span>
        <span>Total : {numberToStringHandler(loaderData.total)} VND</span>
      </header>
      <div className={style.content}>
        <table>
          <thead>
            <tr>
              <th>ID PRODUCT</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>COUNT</th>
            </tr>
          </thead>
          <tbody>
            {loaderData.products.map((item) => {
              const product = item.productId;
              return (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>
                    <img src={product.photos[0]} alt="anh" />
                  </td>
                  <td>{product.name}</td>
                  <td>{numberToStringHandler(product.price)} VND</td>
                  <td>{item.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OderDetailPage;

export const loader = async function ({ params }) {
  const oderId = params.oderId;
  const res = await fetch(`http://localhost:5000/oder-detail/${oderId}`, {
    credentials: "include",
  });
  const resData = await res.json();
  return resData;
};
