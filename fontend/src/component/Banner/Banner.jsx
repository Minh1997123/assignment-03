import style from "./Banner.module.css";
import { useNavigate } from "react-router";
const Banner = function () {
  const navigate = useNavigate();
  return (
    <div className={style.banner}>
      <i>NEW INSPRIRATION 2020</i>
      <h1>20% OFF ON NEW SEASON</h1>
      <button onClick={() => navigate("/shop")}>Browse collections</button>
    </div>
  );
};
export default Banner;
