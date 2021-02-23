import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";

const ProductsList = () => {
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>
        {filteredProducts.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </ListWrapper>
    </>
  );
};

export default ProductsList;
