import style from "./OderListPage.module.css";
import { useLoaderData, Link } from "react-router";
import { numberToStringHandler } from "../../store/Slice";
const OderListPage = function () {
  const loaderData = useLoaderData();
  return (
    <div className={style.container}>
      <header className={style.heder}>
        <h1>HISTORY</h1>
        <span>HISTORY</span>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID ODER</th>
              <th>ID USER</th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>TOTAL</th>
              <th>DELIVERY</th>
              <th>STATUS</th>
              <th>DETAIL</th>
            </tr>
          </thead>
          <tbody>
            {loaderData.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.userId}</td>
                  <td>{item.useName}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.address}</td>
                  <td>{numberToStringHandler(item.total)} VND</td>
                  <td>Waiting for progressing</td>
                  <td>Waiting for pay</td>
                  <td>
                    <Link to={`/oder/${item._id}`}>View</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OderListPage;

export const loader = async function () {
  const res = await fetch("http://localhost:5000/oders", {
    credentials: "include",
  });
  const resData = await res.json();
  return resData;
};
