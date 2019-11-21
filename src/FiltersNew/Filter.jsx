import React from "react";
import Button from "@material-ui/core/Button";

function Filter({ name, onClick, state, styles }) {
  return (
    <Button variant="outlined" onClick={onClick} className={styles}>
      {name}
    </Button>
  );
}

export default Filter;
