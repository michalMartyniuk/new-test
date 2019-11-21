import React from "react";
import { makeStyles } from "@material-ui/styles";
import Filter from "./Filter";

const defaultStyles = {
  container: {},
  filter: {}
};
const useStyles = ({ container, filter }) => makeStyles({ container, filter });

const FiltersContainer = ({ filters, styles }) => {
  styles = styles || defaultStyles;
  const classes = useStyles(styles)();
  return (
    <div className={classes.container}>
      {filters.map(filter => (
        <Filter
          key={filter.name}
          name={filter.name}
          onClick={filter.onClick}
          state={filter.state}
          styles={classes.filter}
        />
      ))}
    </div>
  );
};

export default FiltersContainer;
