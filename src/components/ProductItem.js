import styles from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div style={styles.itemWrapper}>
      <p style={styles.text}>{product.name}</p>
      <img src={product.image} style={styles.productImage} />
      <p style={styles.text}>{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
