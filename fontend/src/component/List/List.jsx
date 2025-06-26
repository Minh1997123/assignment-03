import { useLoaderData } from "react-router";
import ListItem from "./ListItem";
import { createPortal } from "react-dom";
import style from "./List.module.css";
import { useSelector } from "react-redux";
import Popup from "./Popup";
const List = function () {
  const LoaderData = useLoaderData();
  const popupData = useSelector((state) => state.popup);
  return (
    <div className={style.list}>
      <i>MADE THE HARD WAY</i>
      <h2>TOP TRENDING PRODUCTS</h2>
      <ul>
        {LoaderData.map(function (item) {
          return (
            <ListItem
              name={item.name}
              price={item.price}
              src={item.photos[0]}
              key={item._id}
              id={item._id}
              shortDesc={item.short_desc}
            />
          );
        })}
      </ul>
      {popupData.isShowPopup &&
        createPortal(<Popup />, document.getElementById("root"))}
    </div>
  );
};
export default List;
