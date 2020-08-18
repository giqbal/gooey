import React, { Fragment } from 'react'
import FluidImage from './fluidImage'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  heroImage: {
    marginBottom: '2%',
  },
}))

const HeroImage = ({ blok }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <FluidImage
        className={classes.heroImage}
        blok={blok}
        image={blok.image}
        maxHeight={200}
        maxWidth={500}
      />
    </Fragment>
  )
}

export default HeroImage
