import React from "react";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 180,
    marginTop: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#424242",
  },
  title: {
    fontFamily: "DM Serif Display",
    fontSize: "20px",
    borderRadius: 5,
    color: "#62D9FB",
    backgroundColor: "#333333",
  },
  cardBody: {
    fontSize: "30px",
    fontWeight: 600,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h1"
          className={classes.title}
          align="center"
          gutterBottom
        >
          {props.name}
        </Typography>
        <Typography
          className={classes.cardBody}
          style={{ color: props.txtCol }}
          variant="body1"
          align="center"
          gutterBottom
        >
          {props.number}
        </Typography>
      </CardContent>
    </Card>
  );
}
