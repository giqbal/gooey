import React from 'react'
import Components from './components.js'
import { Grid } from '@material-ui/core'
import SbEditable from 'storyblok-react'

const GridComp = props => (
  <SbEditable content={props.blok}>
    <Grid container justify="space-evenly">
      {props.blok.columns.map(blok =>
        React.createElement(Components(blok.component), { key: blok._uid, blok: blok })
      )}
    </Grid>
  </SbEditable>
)

export default GridComp
