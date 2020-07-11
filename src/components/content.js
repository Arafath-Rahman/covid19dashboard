import React from "react";
import axios from "axios";
import SimpleCard from "./card";
import { Grid, withStyles } from "@material-ui/core";

const useStyles = {
  containerStyle: {
    backgroundColor: "#333333",
    borderRadius: 7,
    marginTop: 5,
    width: "100%",
    height: "auto",
  },
};

class Content extends React.Component {
  state = {
    info: {},
    testYesterday: "",
  };

  getYesterdayData = async function () {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries/BD?yesterday=true"
      );
      console.log(response.data);
      this.setState({ testYesterday: response.data.tests });
    } catch (error) {
      console.error(error);
    }
  };

  getTodayData = async function () {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries/BD"
      );
      console.log(response.data);
      this.setState({ info: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getYesterdayData();
    this.getTodayData();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        wrap="wrap"
        className={classes.containerStyle}
      >
        <Grid item>
          <SimpleCard
            name="AFFECTED"
            number={this.state.info.todayCases}
            txtCol="#FF9C00"
          />
        </Grid>

        <Grid item>
          <SimpleCard
            name="DEATH"
            number={this.state.info.todayDeaths}
            txtCol="#FE0505"
          />
        </Grid>

        <Grid item>
          <SimpleCard
            name="RECOVERED"
            number={this.state.info.todayRecovered}
            txtCol="#50AD02"
          />
        </Grid>

        <Grid item>
          <SimpleCard
            name="TEST"
            number={0 || this.state.info.tests - this.state.testYesterday}
            txtCol="#B2BDB5"
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Content);
