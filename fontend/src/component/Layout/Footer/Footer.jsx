import FooterItem from "./FooterItem";
import style from "./Footer.module.css";
const DUMMY_DATA = [
  {
    title: "CUTTOMER SERVICES",
    items: [
      "Help & Contact Us",
      "Returns & Refunds",
      "Online Stores",
      "Terms & Conditions",
    ],
  },
  {
    title: "COMPANY",
    items: ["What We Do", "Available Services", "Latest Posts", "FAQs"],
  },
  {
    title: "SOCIAL MEDIA",
    items: ["Twitter", "Facebook", "Instagram", "Pinterest"],
  },
];

const Footer = function () {
  return (
    <footer className={style.footer}>
      <div className={style.footer__items}>
        {DUMMY_DATA.map(function (item) {
          return (
            <FooterItem
              title={item.title}
              items={item.items}
              key={item.title}
            ></FooterItem>
          );
        })}
      </div>
    </footer>
  );
};
export default Footer;
