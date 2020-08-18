import React from 'react'
import Img from 'gatsby-image'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'

const FixedImage = ({ image, height, width, ...props }) => {
  const fixedProps = getFixedGatsbyImage(image, {
    height,
    width,
  })

  return <Img className={props.className} fixed={fixedProps} />
}

export default FixedImage
