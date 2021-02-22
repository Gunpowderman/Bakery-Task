import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";

const ProductsList = () => {
  return (
    <ListWrapper>
      {products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </ListWrapper>
  );
};

export default ProductsList;
