import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { productId } = useParams();
  return (
    <>
      <h1>Product Detail</h1>
      <p>{productId}</p>
    </>
  );
}

export default ProductDetailPage;
