import logo from "../Logo.jpg";
import styles from "../styles";

function Home() {
  return (
    <>
      <h1 style={styles.text}>The Faker's Bakers</h1>
      <h3 style={styles.text}>Get your carb fix!</h3>
      <img alt="shop logo" src={logo} />
    </>
  );
}

export default Home;
