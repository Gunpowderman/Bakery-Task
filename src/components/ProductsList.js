import products from "../products";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  return products.map((item) => <ProductItem product={item} key={item.id} />);
};

export default ProductsList;
