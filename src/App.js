import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //true by default
  const [query, setQuery] = useState("");

  //make a request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems(); //call the function to fetch
  }, [query]); //whenever query change, useEffect will fireoff again

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} /> {/* setQuery is part of state */}
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
