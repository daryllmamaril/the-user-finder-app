import { SearchResult } from "./SearchResult";

// eslint-disable-next-line react/prop-types
export default function ResultsList({ results }) {
  return (
    <main className="results-container">
      {/* eslint-disable-next-line react/prop-types */}
      {results.map((result, index) => (
        <SearchResult key={index} result={result} />
      ))}
    </main>
  );
}
