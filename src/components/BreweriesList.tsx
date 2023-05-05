import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import BreweryCard from "./BreweryCard";
import Brewery from "../interfaces/Brewery";

interface Props {
  breweries: Brewery[];
  setBreweries: (breweries: Brewery[]) => void;
  originalBreweries: Brewery[];
  setOriginalBreweries: (breweries: Brewery[]) => void;
}

function BreweriesList(props : Props) {
  useEffect(() => {
    axios
      .get<Brewery[]>("https://api.openbrewerydb.org/breweries")
      .then((response: AxiosResponse) => {
        props.setBreweries(response.data);
        props.setOriginalBreweries(response.data);
      });
  }, []);

  return (
    <>
      {props.breweries.map((brewery: Brewery) => {
        return <BreweryCard brewery={brewery} key={brewery.id} />;
      })}
    </>
  );
}

export default BreweriesList;
