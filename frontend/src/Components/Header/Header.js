import "./Header.scss";
import { Link } from "react-router-dom";
import { BsHeartFill, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";

const Header = () => {
  const authorizeUser = useSelector((state) => state.authorizeUser);
  const { user } = authorizeUser;
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(logout());
  };

  return (
    <header className="header">
      <div>
        <Link className="header_logo" to="/">
          E-Cart
        </Link>
      </div>
      <div className="header_search">
        <input type="text" name="search" />
        <Link className="header_search-icon" to="/">
          <BsSearch />
        </Link>
      </div>
      <ul className="header_navigation">
        <li className="header_navigation_item">
          <Link className="header_navigation_item-link" to="/wishlist">
            <BsHeartFill />
          </Link>
        </li>
        <li className="header_navigation_item">
          <Link className="header_navigation_item-link" to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className="header_navigation_item">
          {user && user.name ? (
            <p className="header_navigation_item-link">
              {user.name.split(" ")[0]}
            </p>
          ) : (
            <Link className="header_navigation_item-link" to="/login">
              Login
            </Link>
          )}
        </li>

        {user && user != null ? (
          <li>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : null}
      </ul>
    </header>
  );
};

export default Header;
