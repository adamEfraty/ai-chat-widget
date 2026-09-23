import type { ProductData } from "../types";

function ProductCard({ productData }: { productData: ProductData }) {
  function addToCart() {
    console.log("Added!")
  }

  return (
    <div className="product-card">
      <img src={productData.imgSrc} alt="product picture" />
      <div className="card-1">
        <span className="name">{productData.name}</span>
        <span className="description">{productData.description}</span>
      </div>
      <div className="card-2">
        <span className="price">{productData.price}</span>
        <button className="cart-btn" onClick={() => {}}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
