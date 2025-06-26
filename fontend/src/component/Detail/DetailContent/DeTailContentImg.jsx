import { useState } from "react";
import style from "./DeTailContentImg.module.css";
const DeTailContentImg = function (props) {
  const [imgCurrent, setImgCurrent] = useState(props.data[0]);
  //   ham set anh hien thi khi an vao
  const setImgHandler = function (img) {
    setImgCurrent(img);
  };
  return (
    <div className={style.imgs}>
      <div className={style.items}>
        {props.data.map((img, index) => {
          return (
            <img
              src={img}
              alt={`img ${index + 1}`}
              onClick={() => setImgHandler(img)}
              key={img + index}
            />
          );
        })}
      </div>
      <img src={imgCurrent} alt="main" />
    </div>
  );
};
export default DeTailContentImg;
