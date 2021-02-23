import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a product"
    />
  );
};

export default SearchBar;
