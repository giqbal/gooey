import React from 'react'
import SbEditable from 'storyblok-react'
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
    <SbEditable content={blok}>
      <FluidImage className={classes.heroImage} image={blok.image} maxHeight={200} maxWidth={500} />
    </SbEditable>
  )
}

export default HeroImage
