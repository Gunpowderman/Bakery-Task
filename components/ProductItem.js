import styles from "./styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <>
      <p style={styles.text}>{product.name}</p>
      <img src={product.image} style={styles.ProductItem} />
      <p style={styles.text}>{product.price} KD</p>
    </>
  );
};

export default ProductItem;
