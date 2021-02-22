import ProductsList from "./components/ProductsList";
import { ListWrapper, GlobalStyle, ThemeButton } from "./styles";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <ThemeButton onClick={toggleTheme}>{[currentTheme]} mode</ThemeButton>
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
