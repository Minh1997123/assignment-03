import style from "./DetailRelated.module.css";
import DetailRelatedItem from "./DetailRelatedItem";
import { useLoaderData } from "react-router";
const DetailRelated = function () {
  const loaderData = useLoaderData();
  return (
    <div className={style.related}>
      <h2>REKATED PRIDUCTS</h2>
      <ul>
        {loaderData.relatedItems.map(function (item) {
          return (
            <DetailRelatedItem data={item} key={item._id}></DetailRelatedItem>
          );
        })}
      </ul>
    </div>
  );
};
export default DetailRelated;
