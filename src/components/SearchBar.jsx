
export default function SearchBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search a user..."
            aria-label="Search"
          />
          <button className="btn btn-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
}
