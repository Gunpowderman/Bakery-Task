import ProductsList from "./components/ProductsList";
import { ListWrapper, GlobalStyle } from "./styles";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "black",
  backgroundColor: "#c5c5c7",
  blue: "#006191",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
        <ListWrapper>
          <ProductsList />
        </ListWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
