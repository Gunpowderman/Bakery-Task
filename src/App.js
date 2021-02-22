import ProductsList from "./components/ProductsList";
import styles from "./styles";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <div style={styles.list}>
        <ProductsList />
      </div>
    </>
  );
}

export default App;
