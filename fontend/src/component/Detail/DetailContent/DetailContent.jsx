import DeTailContaentImg from "./DeTailContentImg";
import { useLoaderData } from "react-router";
import Button from "./Button";
import style from "./DetailContent.module.css";
import { numberToStringHandler } from "../../../store/Slice";
const DeTailContent = function () {
  const loaderData = useLoaderData();
  return (
    <div className={style.content}>
      <DeTailContaentImg data={loaderData.photos}></DeTailContaentImg>
      <div className={style.content__infor}>
        <h1>{loaderData.name}</h1>
        <i>{numberToStringHandler(loaderData.price)} VND</i>
        <p>{loaderData.short_desc}</p>
        <span>
          <strong>CATEGORY: </strong>
          {loaderData.category}
        </span>
        <Button data={loaderData}></Button>
      </div>
    </div>
  );
};
export default DeTailContent;
