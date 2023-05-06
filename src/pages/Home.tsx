import React, { useState, useEffect } from "react";
import BreweriesList from "../components/BreweriesList";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Brewery from "../interfaces/Brewery";

function Home() {
  const [search, setSearch] = useState<string>("");
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [originalBreweries, setOriginalBreweries] = useState<Brewery[]>([]);
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Debounce so that the API is not called on every keystroke, but only after the user has stopped typing for 1 second
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    setTimeOutId(
      setTimeout(() => {
        if (search !== "") {
          setBreweries(
            originalBreweries.filter((brewery) =>
              brewery.name.toLowerCase().includes(search.toLowerCase())
            )
          );
        } else if(search === "") {
          setBreweries(originalBreweries);
        }
      }, 1000)
    );

    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
  }, [search, originalBreweries]);

  return (
    <>
      <header>
        <h1 className="title">Breweries🍺</h1>
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
