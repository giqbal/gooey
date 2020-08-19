import React from 'react'
import { Link } from 'gatsby'
import SbEditable from 'storyblok-react'
import { Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const FooterLinkList = ({ blok }) => {
  return (
    <Grid xs={3} item>
      <SbEditable content={blok}>
        <Typography>{blok.link_type_name}</Typography>
      </SbEditable>
      <SbEditable content={blok}>
        <List dense>
          {blok.link_items.map(item => (
            <Link
              to={'/' + (item.link_item.cached_url === 'home' ? '' : item.link_item.cached_url)}
            >
              <ListItem>
                <ListItemText primary={item.link_item.cached_url} />
              </ListItem>
            </Link>
          ))}
        </List>
      </SbEditable>
    </Grid>
  )
}

export default FooterLinkList
