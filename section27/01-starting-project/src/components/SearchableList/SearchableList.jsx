import { useState } from "react";

export default function SearchableList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

  const searchInputHandleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={searchInputHandleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
}
