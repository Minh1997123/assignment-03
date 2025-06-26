import Banner from "../../component/Banner/Banner";
import Categories from "../../component/Categories/Categories";
import OtherInfor from "../../component/OtherInfor/OtherInfor";
import List from "../../component/List/List";

const HomePage = function () {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <List></List>
      <OtherInfor></OtherInfor>
    </div>
  );
};
export default HomePage;
// ham loader lay 8 san pham dau tien tu api
export const loader = async function () {
  const resQuery = await fetch("http://localhost:5000/products", {
    credentials: "include",
  });
  const data = await resQuery.json();
  const listItem = data.filter(function (item, index) {
    return index < 8;
  });
  return listItem;
};
