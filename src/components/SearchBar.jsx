import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        console.log(results);
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
            className="form-control mr-sm-2"
            type="search"
            placeholder="Type to find a user..."
            aria-label="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button className="btn btn-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
}
