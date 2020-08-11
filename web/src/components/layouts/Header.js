import React from 'react'
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import gooeyLogo from '../../images/gooey-logo.png'

const useStyles = makeStyles((theme) => ({
  logoAppBar: {
    margin: 'auto',
    height: '40px'
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar color="transparent">
      <Toolbar>
        <img className={ classes.logoAppBar } src={ gooeyLogo } alt="Gooey Logo"/>
        <IconButton edge="end">
          <LocalMallOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
