import React from 'react'
import SbEditable from 'storyblok-react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

const FluidImage = ({ blok, image, maxHeight, maxWidth, ...props }) => {
  const fluidProps = getFluidGatsbyImage(image, {
    maxHeight,
    maxWidth,
  })

  return (
    <SbEditable content={blok}>
      <Img className={props.className} fluid={fluidProps} />
    </SbEditable>
  )
}

export default FluidImage
