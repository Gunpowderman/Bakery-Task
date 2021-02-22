import ProductsList from "./components/ProductsList";
import { GlobalStyle, ThemeButton } from "./styles";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
// import NavBar from "./components/NavBar";

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
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "dark" : "light"} mode
        </ThemeButton>
        <GlobalStyle />
        <Link to="/">Home </Link>
        <Link to="/products">Products </Link>
        <Switch>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
