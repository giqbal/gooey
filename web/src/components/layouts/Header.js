import React from 'react'
import { Link } from 'gatsby'
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import gooeyLogo from '../../images/gooey-logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'white'
  },
  logoLink: {
    margin: 'auto'
  },
  logoAppBar: {
    height: '40px'
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Link className={ classes.logoLink } to="/">
          <img className={ classes.logoAppBar } src={ gooeyLogo } alt="Gooey Logo"/>
        </Link>
        <IconButton edge="end">
          <LocalMallOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
