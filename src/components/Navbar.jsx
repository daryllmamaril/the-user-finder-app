import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-custom-bg">
      <div className="title-container">
        <div className="icon-container">
          <FaSearch className="search-icon" />
        </div>
        <p>THE USER FINDER APP</p>
      </div>
    </nav>
  );
};
