import style from "./Popup.module.css";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_POPUP, numberToStringHandler } from "../../store/Slice";
import { useNavigate } from "react-router";
const Popup = function () {
  const popupData = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, price, shortDesc, src, id } = popupData.popupData;
  // ham an hien thi popup
  const closePopupHandler = function (event) {
    if (event.target.tagName === `DIALOG`) {
      dispatch(HIDE_POPUP());
    }
  };
  // ham chuyen huong den trang detail
  const toDetailHandler = function () {
    dispatch(HIDE_POPUP());
    navigate(`detail/${id}`);
  };
  return (
    <dialog className={style.popup} onClick={closePopupHandler}>
      <div className={style.popup__content}>
        <img src={src} alt={name} />
        <div className={style.popup__content__info}>
          <button onClick={() => dispatch(HIDE_POPUP())}>X</button>
          <h2>{name}</h2>
          <i>{numberToStringHandler(price)} VND</i>
          <p>{shortDesc}</p>
          <button onClick={toDetailHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="#ffffff"
                d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
            View Details
          </button>
        </div>
      </div>
    </dialog>
  );
};
export default Popup;
