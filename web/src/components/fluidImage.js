import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

const FluidImage = ({ image, maxHeight, maxWidth, ...props }) => {
  const fluidProps = getFluidGatsbyImage(image, {
    maxHeight,
    maxWidth,
  })

  return <Img className={props.className} fluid={fluidProps} />
}

export default FluidImage
