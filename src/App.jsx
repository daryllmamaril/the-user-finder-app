import "./App.css";
import { Navbar } from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main className="main-container">
      <Navbar />
      <article className="search-bar-container">
        <SearchBar />
        <div>Search Results</div>
      </article>
    </main>
  );
}

export default App;
