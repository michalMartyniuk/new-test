import React from "react";
import Filter from "./Filter";

function Filters({ filtersArr }) {
  const styles = { backgroundColor: "orange" };
  const activeStyles = { backgroundColor: "green" };
  return (
    <div>
      {filtersArr.map(filter => {
        return (
          <Filter
            key={filter.name}
            name={filter.name}
            onClick={filter.onClick}
            state={filter.state}
            styles={styles}
            activeStyles={activeStyles}
          />
        );
      })}
    </div>
  );
}

export default Filters;
