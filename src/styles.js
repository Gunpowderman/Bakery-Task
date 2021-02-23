import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const SearchBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

const Brand = styled(Link)`
  img {
    width: 4rem;
  }
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 0.75em;
  padding: 0.25em 1em;
  width: 115px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.h3`
  text-align: center;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
`;

const ItemWrapper = styled.div`
  display: block;
`;

const Paragraph = styled.p`
  text-align: center;
`;

export {
  Description,
  Title,
  ListWrapper,
  ProductImage,
  ItemWrapper,
  Paragraph,
  GlobalStyle,
  ThemeButton,
  Brand,
  HomeImage,
  SearchBarStyle,
};

// const styles = {
//   text: { textAlign: "center" },

//   productImage: { width: "200px", height: "200px", margin: "20px" },
//   list: {
//     alignItems: "center",
//     justifyContent: "center",
//     display: "flex",
//     flexwrap: "wrap",
//   },
//   itemWrapper: {
//     display: "block",
//   },
// };

// export default styles;
