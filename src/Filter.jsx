import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = styles => withStyles(styles)(Button);

const createFilterStyles = (state, styles, activeStyles) => {
  return state ? activeStyles : styles;
};

function Filter({ onClick, name, state, styles, activeStyles }) {
  const filterStyles = createFilterStyles(state, styles, activeStyles);
  const FilterButton = StyledButton({ root: filterStyles });
  return (
    <FilterButton variant="outlined" onClick={onClick}>
      {name}
    </FilterButton>
  );
}

export default Filter;
