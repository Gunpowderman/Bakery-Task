import { Paragraph, ProductImage, ItemWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ItemWrapper>
      <Paragraph>{product.name}</Paragraph>
      <ProductImage src={product.image} />
      <Paragraph>{product.price} KD</Paragraph>
    </ItemWrapper>
  );
};

export default ProductItem;
