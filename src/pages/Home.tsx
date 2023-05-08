import React, { useState, useEffect, useContext } from "react";
import BreweriesList from "../components/BreweriesList";
import Search from "../components/Search";
import Brewery from "../interfaces/Brewery";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { Typography } from "@mui/material";

function Home() {
  const [search, setSearch] = useState<string>("");
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [originalBreweries, setOriginalBreweries] = useState<Brewery[]>([]);
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
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
          setCurrentPage(1)
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
        <Typography variant="h4" fontWeight={700} className="title">Breweries🍺</Typography>
        <nav>
          <ThemeToggleButton></ThemeToggleButton>
          <Search search={search} setSearch={setSearch}></Search>
        </nav>
      </header>
      <main>
        <BreweriesList
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
