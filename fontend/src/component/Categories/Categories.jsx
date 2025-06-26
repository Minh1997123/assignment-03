import IPhoneImg from "../../image/product_1.png";
import MacImg from "../../image/product_2.png";
import IPPabImg from "../../image/product_3.png";
import WatchImg from "../../image/product_4.png";
import AirPodsImg from "../../image/product_5.png";
import style from "./Categories.module.css";
import { useNavigate } from "react-router";
const Categories = function () {
  const navigate = useNavigate();
  //   thuc hien chuyen huong sang trang shop
  const navigateHandler = function () {
    navigate("/shop");
  };
  const images = [IPhoneImg, MacImg, IPPabImg, WatchImg, AirPodsImg];
  return (
    <div className={style.categoty}>
      <i>CAREFULLU CAREATED COLLECTIONS</i>
      <h2>BROWSE OUR CATEGORIES</h2>
      <div className={style.categoty__img}>
        {images.map(function (image) {
          return (
            <img
              src={image}
              alt="anh"
              onClick={navigateHandler}
              key={image}
            ></img>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
