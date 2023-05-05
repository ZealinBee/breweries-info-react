import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Brewery from "../interfaces/Brewery";

function BreweryPage() {
  const { id } = useParams();
  const [brewery, setBrewery] = useState<Brewery>();

  useEffect(() => {
    axios
      .get<Brewery>(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response: AxiosResponse) => setBrewery(response.data));
  }, [id]);

  return (
    <div>
      <Link to="/">Back to home</Link>
      

    </div>
  );
}

export default BreweryPage;
