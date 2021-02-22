import logo from "../Logo.jpg";
import { Description, Title } from "../styles";

function Home() {
  return (
    <>
      <Title>The Faker's Bakers</Title>
      <Description>Get your carb fix!</Description>
      <img alt="shop logo" src={logo} />
    </>
  );
}

export default Home;
