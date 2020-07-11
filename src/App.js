import React from "react";
import { Grid, makeStyles, Typography, Switch } from "@material-ui/core";
import Header from "./components/header";
import Content from "./components/content";

const useStyles = makeStyles(() => ({
  containerStyle: {
    backgroundColor: "#212121",
    borderRadius: 7,
    marginTop: 5,
    width: "100vw",
    height: "100vh",
  },
  typographyStyles: {
    flex: 1,
    fontFamily: "DM Serif Display",
    fontWeight: 600,
    fontSize: "1.1rem",
    letterSpacing: "2px",
    color: "#62D9FB",
  },
}));

const App = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid
      container
      direction="column"
      wrap="wrap"
      className={classes.containerStyle}
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid item container direction="row" justify="center">
        <Grid item>
          <Typography className={classes.typographyStyles}>24 Hours</Typography>
        </Grid>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          color="primary"
          name="checkedA"
        />
        <Grid item>
          <Typography className={classes.typographyStyles}>Total</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default App;
