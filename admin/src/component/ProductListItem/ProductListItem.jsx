import style from "./ProductListItem.module.css";

const ProductListItem = function (props) {
  const data = props.data;
  // ham dung de chuyen doi tu so sang chuoi de hien thi
  const numberToStringHandler = function (number) {
    let stringNumber = number.toString();
    // lay 3 so cuoi
    const numberCurrent = stringNumber.slice(-3);
    // tao chuoi so moi de dung de quy
    stringNumber = stringNumber.slice(0, -3);
    // neu la nhung so lon nhat thi tra ra so do va thoat de quy
    if (!stringNumber) {
      return numberCurrent;
    }
    // tra ra chuoi so tu so ban dau
    const newStringNumber =
      numberToStringHandler(Number(stringNumber)) + "." + numberCurrent;

    return newStringNumber;
  };

  const getBackgrouOdd = function () {
    // lay nhung so co so thu tu la so le
    if ((props.index + 1) % 2) {
      return style.backgoundOdd;
    }
  };
  return (
    <tr className={`${style.item} ${getBackgrouOdd()}`}>
      <td>{data._id}</td>
      <td>{data.name}</td>
      <td>{numberToStringHandler(data.price)}</td>
      <td>
        <img src={data.photos[0]} alt="" className={style.image} />
      </td>
      <td>{data.category}</td>
      <td className={style.buttons}>
        <button className={style[`button--update`]}>Update</button>
        <button className={style[`button--delete`]}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductListItem;
