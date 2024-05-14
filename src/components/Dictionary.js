import React, { useState } from 'react';

const dictionary = {
  React: "A JavaScript library for building user interfaces.",
  Component: "A reusable building block in React.",
  State: "An object that stores data for a component."
};

const DictionaryApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    const capitalizedTerm = trimmedSearchTerm.charAt(0).toUpperCase() + trimmedSearchTerm.slice(1);
    const definition = dictionary[capitalizedTerm];
    
    if (definition) {
      setSearchResult(definition);
    } else {
      setSearchResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search for a word...'
      />
      <button onClick={handleClick}>Search</button>
      <h3>Definition:</h3>
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
};

export default DictionaryApp;
