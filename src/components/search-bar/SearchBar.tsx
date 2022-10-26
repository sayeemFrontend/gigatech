import "./SearchBar.css";
import { useRef } from "react";
import { useSelector } from "react-redux";
import searchIcon from "./searchIcon.svg";
type SearchProps = {
  styleSheet?: React.CSSProperties;
  placeholder?: string;
  onSearch?: () => void;
};

function SearchBar(props: SearchProps) {
  const { styleSheet, placeholder, onSearch } = props;
  const inputRef = useRef(null);
  // const { seller } = useSelector((state) => state);

  return (
    <div className="search-bar" style={styleSheet && styleSheet}>
      <img src={searchIcon} alt="icons" />
      <input ref={inputRef} onChange={onSearch} type="text" placeholder={placeholder && placeholder} />
    </div>
  );
}

export default SearchBar;
