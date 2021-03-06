import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
  },
  headline: {
    fontWeight: "1000",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function HomeText(props) {
  const { classes } = props;
  return (
    <Grid className={classes.root}>
      <Typography
        className={classes.headline}
        variant="headline"
        align="center"
        gutterBottom
      >
        Welcome!
      </Typography>
      <Typography
        style={{ textAlign: "center", maxWidth: 750, margin: "auto" }}
      >
        This site does three things... get space images, wierd stuff from Cooper
        Hewitt, and a poem generator. Why does it do these things? I just picked
        random things years ago so I can learn new tools creatively.
      </Typography>
    </Grid>
  );
}

HomeText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeText);
