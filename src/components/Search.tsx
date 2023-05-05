import React from "react";

interface Props {
  search: string;
  setSearch: (search: string) => void;
}
function Search(props: Props) {
  return (
    <>
      <input
        type="text"
        onChange={(e) => props.setSearch(e.target.value)}
        value={props.search}
        placeholder="Search for a brewery's name..."
      />
    </>
  );
}

export default Search;
