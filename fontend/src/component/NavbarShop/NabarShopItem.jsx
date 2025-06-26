import style from "./NabarShopItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/Slice";
const NavbarShopItem = function (props) {
  const { categories, items } = props;
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  // ham set category vao redux
  const setCategoryHandler = function (categoryItem) {
    dispatch(setCategory(categoryItem));
  };
  // ham danh dau muc dang duoc chon
  const activeHandler = function (index) {
    if (categories[index] === category) {
      return style.active;
    }
  };
  return (
    <li className={style.nabar__shop__item}>
      <h4>{props.title}</h4>
      {items.map(function (item, index) {
        return (
          <i
            className={activeHandler(index)}
            key={item}
            onClick={() => setCategoryHandler(categories[index])}
          >
            {item}
          </i>
        );
      })}
    </li>
  );
};
export default NavbarShopItem;
