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
}))

const Navi = ({ blok }) => {
  const classes = useStyles()

  return (
    <SbEditable content={blok}>
      <AppBar color="white">
        <Toolbar>
          <Link className={classes.navLogo} to={'/'}>
            <FixedImage image={blok.logo} height={40} width={100} />
          </Link>
          <IconButton edge="end">
            <LocalMallOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </SbEditable>
  )
}

export default Navi
