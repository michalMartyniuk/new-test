export const filters = [
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
