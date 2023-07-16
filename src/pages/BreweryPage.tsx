import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Brewery from "../interfaces/Brewery";
import { Typography, Button, Box } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

function BreweryPage() {
  const { id } = useParams();
  const [brewery, setBrewery] = useState<Brewery>();

  useEffect(() => {
    axios
      .get<Brewery>(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response: AxiosResponse) => setBrewery(response.data))
      .catch((error) => {
        if (error.isAxiosError) {
          console.log(error.status);
          console.error(error.response);
        } else {
          console.error(error);
        }
      });
  }, [id]);

  return (
    <Box
      className="brewery"
      sx={{
        backgroundColor: "background.default",
        margin: "0",
        minHeight: "100vh",
        color: "text.primary",
        padding: "2rem",
      }}
    >
      <Link to="/">
        <Button color="secondary" variant="outlined">
          {" "}
          Back to home
        </Button>{" "}
      </Link>
      {brewery ? (
        <div className="brewery__details">
          <Typography fontWeight={700} fontSize={25}>
            {brewery.name}
          </Typography>
          <Typography>Type: {brewery.brewery_type} brewery</Typography>
          <Typography>
            Address: {brewery.street}, {brewery.city}, {brewery.state},{" "}
            {brewery.postal_code}
          </Typography>
          <Typography mb={0.5}>Phone: {brewery.phone}</Typography>
          <MuiLink color="secondary" href={brewery.website_url}>
            Website: {brewery.website_url ? brewery.website_url : "No Website"}
          </MuiLink>
        </div>
      ) : (
        <div>Loading Brewery...</div>
      )}
    </Box>
  );
}

export default BreweryPage;
