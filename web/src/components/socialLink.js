import React from 'react'
import { Link } from 'gatsby'
import SbEditable from 'storyblok-react'
import { IconButton } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const SocialLink = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <Link to={blok.link.url}>
        <IconButton>{blok.type === 'fb' ? <FacebookIcon /> : <InstagramIcon />}</IconButton>
      </Link>
    </SbEditable>
  )
}

export default SocialLink
