import type { ProductData } from "../types";

function ProductCard({ productData }: { productData: ProductData }) {
  return (
    <div className="product-card">
      <img src={productData.imgSrc} alt="product picture" />
      <span className="name">{productData.name}</span>
      <span className="price">{productData.price}</span>
    </div>
  );
}

export default ProductCard;
