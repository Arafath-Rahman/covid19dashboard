import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  InputBase,
  fade,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
    fontFamily: "DM Serif Display",
    fontWeight: 600,
    fontSize: "1.1rem",
    letterSpacing: "2px",
    color: "#62D9FB",
  },
  appbarStyle: {
    backgroundColor: "#333333",
  },
  buttonColor: {
    color: "#62D9FB",
    marginRight: "10px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: "50px",
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.only("xs")]: {
      marginRight: "15px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "10ch",
      "&:focus": {
        width: "13ch",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbarStyle}>
      <Toolbar>
        <LocalHospitalIcon className={classes.buttonColor} />
        <Typography className={classes.typographyStyles}>
          COVID-19 DASHBOARD
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon className={classes.buttonColor} />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <IconButton>
          <Brightness4RoundedIcon className={classes.buttonColor} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
