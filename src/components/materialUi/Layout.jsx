import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function LayoutComponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Tier 1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <SignUp />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <LogIn />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Tier 3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Tier 3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Tier 3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Tier 3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

LayoutComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LayoutComponent);
