import React from "react";
import FiltersContainer from "./FiltersContainer";

function Filters() {
  const [filtersState, setFiltersState] = React.useState({
    poland: false,
    germany: false,
    france: false
  });
  const filters = [
    {
      name: "Polska",
      onClick: () =>
        setFiltersState({ ...filtersState, poland: !filtersState.poland }),
      state: filtersState.poland
    },
    {
      name: "Niemcy",
      onClick: () =>
        setFiltersState({ ...filtersState, germany: !filtersState.germany }),
      state: filtersState.germany
    },
    {
      name: "Francja",
      onClick: () =>
        setFiltersState({ ...filtersState, france: !filtersState.france }),
      state: filtersState.france
    }
  ];
  const filtersStyles = {
    container: {
      display: "flex",
      fontSize: "2rem",
      width: "auto"
    },
    filter: {
      border: "1px solid black",
      fontSize: "1rem",
      margin: 5
    }
  };
  return <FiltersContainer filters={filters} styles={filtersStyles} />;
}

export default Filters;
