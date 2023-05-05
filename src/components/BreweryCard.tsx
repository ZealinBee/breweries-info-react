import React from "react";
import Brewery from "../interfaces/Brewery";
import { Link } from "react-router-dom";
import BreweryPage from "../pages/BreweryPage";

interface Props {
  brewery: Brewery;
}
function BreweryCard(props: Props) {
  return (
    <div>
      <Link to={`/breweries/${props.brewery.id}`}>
        <h1>{props.brewery.name}</h1>
      </Link>
    </div>
  );
}

export default BreweryCard;
