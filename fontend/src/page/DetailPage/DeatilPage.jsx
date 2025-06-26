import DeTailContent from "../../component/Detail/DetailContent/DetailContent";
import DetailDescription from "../../component/Detail/DetailDescription/DetailDescription";
import DetailRelated from "../../component/Detail/DetailRelated/DetailRelated";
const DetailPage = function () {
  return (
    <div>
      <DeTailContent></DeTailContent>
      <DetailDescription></DetailDescription>
      <DetailRelated></DetailRelated>
    </div>
  );
};
export default DetailPage;

export const loader = async function ({ params }) {
  const res = await fetch(`http://localhost:5000/product/${params.productId}`, {
    credentials: "include",
  });
  const reqData = await res.json();
  return reqData;
};
