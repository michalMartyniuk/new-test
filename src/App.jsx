import React from "react";
import Filters from "./Filters";
import { filter } from "minimatch";
import Test from './Test';

function App() {
  const [filtersState, setFiltersState] = React.useState({
    poland: false,
    germany: false,
    france: false
  });
  const filters = [
    {
      name: "Polska",
      onClick: () => setFiltersState({ ...filtersState, poland: !filtersState.poland }),
      state: filtersState.poland,
    },
    {
      name: "Niemcy",
      onClick: () => setFiltersState({ ...filtersState, germany: !filtersState.germany }),
      state: filtersState.germany,
    },
    {
      name: "Francja",
      onClick: () => setFiltersState({ ...filtersState, france: !filtersState.france }),
      state: filtersState.france,
    }
  ];
  console.log(filtersState)
  return (
    <div>
      <h1>App component</h1>
      <Filters filtersArr={filters} />
      <Test />
    </div>
  );
}

export default App;
