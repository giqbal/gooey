import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'white'
  },
  logoLink: {
    margin: 'auto'
  }
}))

export default ({ logo }) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Link className={ classes.logoLink } to="/">
          <Img fixed={ logo }/>
        </Link>
        <IconButton edge="end">
          <LocalMallOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
