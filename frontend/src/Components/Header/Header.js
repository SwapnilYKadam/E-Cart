import "./Header.scss";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">E-Cart</div>
      <div className="header_search">
        <input type="text" name="search" />
        <Link className="header_search-icon">
          <BsSearch />
        </Link>
      </div>
      <ul className="header_navigation">
        <li className="header_navigation_item">
          <Link className="header_navigation_item-link">Cart</Link>
        </li>
        <li className="header_navigation_item">
          <Link className="header_navigation_item-link">Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
