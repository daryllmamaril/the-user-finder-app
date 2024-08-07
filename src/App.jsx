import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  return (
    <main className="main-container">
      <Navbar />
      <article className="search-bar-container">
        <SearchBar setResults={setResults} />
        <ResultsList results={results} />
      </article>
    </main>
  );
}

export default App;
