import logo from "../Logo.jpg";
import { Description, Title, HomeImage } from "../styles";

function Home() {
  return (
    <>
      <Title>The Faker's Bakers</Title>
      <Description>Get your carb fix!</Description>
      <HomeImage alt="shop logo" src={logo} />
    </>
  );
}

export default Home;
