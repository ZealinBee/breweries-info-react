import React, { useState, useEffect } from "react";
import BreweriesList from "../components/BreweriesList";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Brewery from "../interfaces/Brewery";

function Home() {
  const [search, setSearch] = useState<string>("");
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [originalBreweries, setOriginalBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    if(search !== ""){
      setBreweries(originalBreweries.filter(brewery => brewery.name.toLowerCase().includes(search.toLowerCase())));
    }else {
      setBreweries(originalBreweries);
    }
  }, [search]);

  return (
    <>
      <header>
        <nav>
          <Filter></Filter>
          <Search search={search} setSearch={setSearch}></Search>
        </nav>
      </header>
      <main>
        <BreweriesList
          breweries={breweries}
          setBreweries={setBreweries}
          originalBreweries={originalBreweries}
          setOriginalBreweries={setOriginalBreweries}
        ></BreweriesList>
      </main>
    </>
  );
}

export default Home;
