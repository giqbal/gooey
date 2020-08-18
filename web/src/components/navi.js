import React from 'react'
import { Link } from 'gatsby'
import { AppBar, IconButton, Toolbar, makeStyles } from '@material-ui/core'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import FixedImage from './fixedImage'

const useStyles = makeStyles(theme => ({
  navLogo: {
    margin: 'auto',
  },
}))

const Navi = ({ blok }) => {
  const classes = useStyles()
  console.log(blok)
  return (
    <AppBar color="white">
      <Toolbar>
        <Link className={classes.navLogo} to={'/'}>
          <FixedImage blok={blok} image={blok.logo} height={40} width={100} />
        </Link>
        <IconButton edge="end">
          <LocalMallOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navi
