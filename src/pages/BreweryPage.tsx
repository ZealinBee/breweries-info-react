import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Brewery from "../interfaces/Brewery";
import { Box, Typography, Button } from "@mui/material";
import {Link as MuiLink} from "@mui/material";

function BreweryPage() {
  const { id } = useParams();
  const [brewery, setBrewery] = useState<Brewery>();

  useEffect(() => {
    axios
      .get<Brewery>(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response: AxiosResponse) => setBrewery(response.data));
  }, []);

  return (
    <div className="brewery">
      <Link to="/">
        <Button color="secondary" variant="outlined"> Back to home</Button>{" "}
      </Link>
      {brewery ? (
        <div className="brewery__details">
          <Typography fontWeight={700} fontSize={25}>{brewery.name}</Typography>
          <Typography>Type: {brewery.brewery_type} brewery</Typography>
          <Typography>Address: {brewery.address_1} {brewery.city}, {brewery.state}, {brewery.postal_code}</Typography>

          <MuiLink>Website: {brewery.website_url}</MuiLink>
        </div>
      ) : (
        <div>No brewery found</div>
      )}
    </div>
  );
}

export default BreweryPage;
