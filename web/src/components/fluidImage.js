import React from 'react'
import SbEditable from 'storyblok-react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

const FluidImage = ({ blok, image, maxHeight, maxWidth }) => {
  const fluidProps = getFluidGatsbyImage(image, {
    maxHeight,
    maxWidth,
  })

  return (
    <SbEditable content={blok}>
      <Img fluid={fluidProps} />
    </SbEditable>
  )
}

export default FluidImage
