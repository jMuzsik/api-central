import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: '75%',
    margin: '2rem auto'
  },
  goBack: {
    fill: 'white'
  },
  [theme.breakpoints.up('sm')]: {
    card: {
      width: '75%',
      margin: '3rem auto'
    }
  }
})

function About(props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLswNpG72S0XDP6Bz-BoDLYWS-EKovRWLWnyuwYOueBu8u2TeTQ"
          title="REST API"
        />
        <CardContent>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/">
            <IconButton color="inherit" className={classes.menuButton}>
              <ArrowBack className={classes.goBack} />
            </IconButton>
          </Button>
          <a
            rel="noopener noreferrer"
            href="http://www.restapitutorial.com"
            target="_blank"
          >
            <Button size="small" color="default">
              Learn More
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(About))
