const DetailRelatedItem = function (props) {
  const { photos, name, price } = props.data;
  return (
    <li>
      <img src={photos[0]}></img>
      <h5>{name}</h5>
      <i>{price} VND</i>
    </li>
  );
};
export default DetailRelatedItem;
