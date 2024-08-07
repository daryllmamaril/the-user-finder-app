import { useState } from "react";
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light searchbar-container">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 input-custom"
            type="search"
            placeholder="Type to find a user..."
            aria-label="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <FaSearch className="input-search-icon" />
        </form>
      </nav>
    </>
  );
}
