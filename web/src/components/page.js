import React from 'react'
import Components from './components.js'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '7%',
  },
}))

const Page = props => {
  const classes = useStyles()
  return (
    <Container className={classes.container} disableGutters>
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components(blok.component), { key: blok._uid, blok: blok })
        )}
    </Container>
  )
}

export default Page
