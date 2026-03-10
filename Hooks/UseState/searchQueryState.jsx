import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Search Query: {query}</p>
    </>
  );
}

export default Search;
