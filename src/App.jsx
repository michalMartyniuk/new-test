import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  app: {},
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>

    </div>
  );
}
export default App;
