import React from 'react'
import SbEditable from 'storyblok-react'
import { Grid } from '@material-ui/core'

const Feature = props => (
  <SbEditable content={props.blok}>
    <Grid item>
      <h2>{props.blok.name}</h2>
    </Grid>
  </SbEditable>
)

export default Feature
