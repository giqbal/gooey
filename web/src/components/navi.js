import React from 'react'
import SbEditable from 'storyblok-react'
import { Link } from 'gatsby'
import { AppBar, IconButton, Toolbar, makeStyles } from '@material-ui/core'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import FixedImage from './fixedImage'

const useStyles = makeStyles(theme => ({
  navLogo: {
    margin: 'auto',
  },
  navBar: {
    background: 'white',
  },
}))

const Navi = ({ blok }) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.navBar} color="default">
      <Toolbar>
        <SbEditable content={blok}>
          <Link className={classes.navLogo} to={'/'}>
            <FixedImage image={blok.logo} height={40} width={100} />
          </Link>
        </SbEditable>
        <IconButton edge="end">
          <LocalMallOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navi
