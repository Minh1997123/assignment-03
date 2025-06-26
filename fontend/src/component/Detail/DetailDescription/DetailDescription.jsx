import style from "./DetailDescription.module.css";
import { useLoaderData } from "react-router";
const DetailDescription = function () {
  const loaderData = useLoaderData();
  return (
    <div className={style.description}>
      <button>DESCTIPTION</button>
      <h2>PRODUCT DESCTIPTION</h2>
      <p>{loaderData.long_desc}</p>
    </div>
  );
};
export default DetailDescription;
