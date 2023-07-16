import React from "react";
import Brewery from "../interfaces/Brewery";
import { Link } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

interface BreweryCardProps {
  brewery: Brewery;
}
function BreweryCard(props: BreweryCardProps) {
  return (
    <Card className="card">
      <Typography mb={4} fontWeight={700} fontSize={20}>{props.brewery.name}</Typography>
      <Typography mb={1} fontWeight={400} >{props.brewery.state}</Typography>
      <MuiLink color="secondary" href={props.brewery.website_url}>
        {props.brewery.website_url}
      </MuiLink>
      <Link to={`breweries/${props.brewery.id}`} >
        <Button variant="contained" color="secondary" className="learn-more-button">
          Learn More
        </Button>
      </Link>
    </Card>
  );
}

export default BreweryCard;
