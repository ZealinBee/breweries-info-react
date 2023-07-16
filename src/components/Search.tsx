import React from "react";
import { TextField } from "@mui/material";

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}
function Search(props: SearchProps) {
  return (
    <>
      <TextField
        id="standard-basic"
        label="By Breweries Name"
        variant="standard"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        color="secondary"
        size="medium"
      />
    </>
  );
}

export default Search;
