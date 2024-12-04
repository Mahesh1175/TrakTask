import React, { useState } from 'react';

const SearchBar = ({ searchTask }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchTask(query); // Pass the query
    }
  };

  return (
    <div className="relative text-md flex items-center px-2 max-w-full sm:max-w-md mx-auto mt-2">
      <i className="fas fa-search text-[#697565] text-md absolute left-4"></i>
      <input
        type="search"
        value={query}
        onChange={handleSearchChange}
        className="search-field input pr-3 shadow-lg text-[#ECDFCC] pl-8 py-2 w-full border-2  rounded-xl focus:ring-2 focus:ring-[#697565] focus:outline-none bg-[#1E201E] border-[#697565]"
        placeholder="Search tasks..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
