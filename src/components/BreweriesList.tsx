import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import BreweryCard from "./BreweryCard";
import Brewery from "../interfaces/Brewery";
import withLoading from "./withLoading";
import { Grid, Container } from "@mui/material";

interface Props {
  breweries: Brewery[];
  setBreweries: (breweries: Brewery[]) => void;
  originalBreweries: Brewery[];
  setOriginalBreweries: (breweries: Brewery[]) => void;
}

function BreweriesList(props: Props) {
  useEffect(() => {
    axios
      .get<Brewery[]>("https://api.openbrewerydb.org/breweries")
      .then((response: AxiosResponse) => {
        props.setBreweries(response.data);
        props.setOriginalBreweries(response.data);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {props.breweries.map((brewery) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={brewery.id}>
            <BreweryCard brewery={brewery} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BreweriesList;
