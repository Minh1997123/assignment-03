import style from "./Footer.module.css";
const FooterItem = function (props) {
  const { title, items } = props;
  return (
    <div className={style.footer__item}>
      <h3>{title}</h3>
      <ul>
        {items.map(function (item) {
          return (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
