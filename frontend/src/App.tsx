import ProductCard from "./components/ProductCard";
import type { ProductData } from "./types";

const data: ProductData = {
  imgSrc:
    "https://ynet-pic1.yit.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver5/crop_images/2022/08/28/HkQge9u1o/HkQge9u1o_56_47_463_544_0_x-large.jpg",
  name: "Suplement example",
  price: "$10,000",
};

function App() {
  return <ProductCard productData={data} />;
}

export default App;