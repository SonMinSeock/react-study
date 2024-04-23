import { useState } from "react";

export default function SearchableList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

  console.log(searchResults);
  const searchInputHandleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={searchInputHandleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
