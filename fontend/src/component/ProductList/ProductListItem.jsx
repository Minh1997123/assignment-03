import style from "./ProductListItem.module.css";
import { useNavigate } from "react-router";
import { numberToStringHandler } from "../../store/Slice";
const ProductListItem = function (props) {
  const { src, name, price, id } = props;
  const navigate = useNavigate();
  const toDetailPageHandler = function () {
    navigate(`/detail/${id}`);
  };
  return (
    <li className={style.product__list__item}>
      <img src={src} alt={name} onClick={toDetailPageHandler} />
      <h3>{name}</h3>
      <i>{numberToStringHandler(price)} VND</i>
    </li>
  );
};
export default ProductListItem;
