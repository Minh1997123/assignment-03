import { SHOW_POPUP } from "../../store/Slice";
import { useDispatch } from "react-redux";
import { numberToStringHandler } from "../../store/Slice";
const ListItem = function (props) {
  const { name, price, shortDesc, src, id } = props;
  const dispatch = useDispatch();
  // ham hien thi va gui thong tin den popup
  const openPopupHandler = function () {
    const popupData = {
      name: name,
      price: price,
      shortDesc: shortDesc,
      src: src,
      id: id,
    };
    dispatch(SHOW_POPUP({ data: popupData }));
  };
  return (
    <li>
      <img src={props.src} alt={props.name} onClick={openPopupHandler}></img>
      <h2>{props.name}</h2>
      <i>{numberToStringHandler(price)}</i>
    </li>
  );
};
export default ListItem;
