import React from 'react'
import SbEditable from 'storyblok-react'
import Components from './components.js'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: '5%',
    background: '#ededed',
  },
}))

const Footer = ({ blok }) => {
  const classes = useStyles()
  console.log(blok)
  return (
    <SbEditable content={blok}>
      <Box className={classes.footer} component="footer" m={1}>
        <Grid container alignItems="flex-start" justify="space-around">
          {blok.link_columns
            ? blok.link_columns.map(link_column =>
                React.createElement(Components(link_column.component), {
                  key: link_column._uid,
                  blok: link_column,
                })
              )
            : null}
          {blok.social_media_links && blok.social_media_links.length ? (
            <Grid xs={6} item>
              <Typography>Social Media</Typography>
              {blok.social_media_links.map(social_link =>
                React.createElement(Components(social_link.component), {
                  key: social_link._uid,
                  blok: social_link,
                })
              )}
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </SbEditable>
  )
}

export default Footer
