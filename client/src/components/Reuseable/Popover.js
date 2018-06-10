import IconButton from "@material-ui/core/IconButton"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import React from "react"
import Details from "@material-ui/icons/Details"

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
})

class SimplePopover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      text: props.text,
    }
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state

    return (
      <div>
        <IconButton variant="contained" onClick={this.handleClick}>
          <Details />
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography}>
            {this.state.text}
          </Typography>
        </Popover>
      </div>
    )
  }
}

SimplePopover.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimplePopover)
