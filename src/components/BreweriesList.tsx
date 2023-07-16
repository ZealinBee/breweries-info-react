import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import BreweryCard from "./BreweryCard";
import Brewery from "../interfaces/Brewery";
import { Grid, Container, Pagination } from "@mui/material";

interface BreweriesListProps {
  breweries: Brewery[];
  setBreweries: (breweries: Brewery[]) => void;
  originalBreweries: Brewery[];
  setOriginalBreweries: (breweries: Brewery[]) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

function BreweriesList(props: BreweriesListProps) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get<Brewery[]>("https://api.openbrewerydb.org/breweries")
      .then((response: AxiosResponse) => {
        props.setBreweries(response.data);
        props.setOriginalBreweries(response.data);
        setLoading(false);
      })
      .catch((error) => {
          if(error.isAxiosError) {
              console.log(error.status)
              console.error(error.response)
          }else {
              console.error(error)
          }
      })
  }, []);

  const breweriesPerPage = 8;
  const indexOfLastBrewery = props.currentPage * breweriesPerPage;
  const indexOfFirstBrewery = indexOfLastBrewery - breweriesPerPage;
  const currentBreweries = props.breweries.slice(
    indexOfFirstBrewery,
    indexOfLastBrewery
  );
  const isFirstPage = props.currentPage === 1;
  const isLastPage =
    props.currentPage === Math.ceil(props.breweries.length / breweriesPerPage);

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    props.setCurrentPage(value);
  }

  return (
    <>
      {loading ? (
        <div>Loading Breweries...</div>
      ) : (
        <Container>
          <Grid container spacing={2}>
            {currentBreweries.map((brewery) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={brewery.id}>
                <BreweryCard brewery={brewery} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={Math.ceil(props.breweries.length / breweriesPerPage)}
            shape="rounded"
            onChange={handlePageChange}
            className="pagination"
            // Basically if there's only one page, disable the pagination buttons
            disabled={isFirstPage && isLastPage}
          ></Pagination>
        </Container>
      )}
    </>
  );
}

export default BreweriesList;
