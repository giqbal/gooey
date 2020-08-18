import React from 'react'
import SbEditable from 'storyblok-react'
import Img from 'gatsby-image'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'

const FixedImage = ({ blok, image, height, width }) => {
  const fixedProps = getFixedGatsbyImage(image, {
    height,
    width,
  })

  console.log(fixedProps)
  return (
    <SbEditable content={blok}>
      <Img fixed={fixedProps} />
    </SbEditable>
  )
}

export default FixedImage
