import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Container, makeStyles } from '@material-ui/core'
import Footer from './Footer'
import Header from './Header'

export default props => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: {eq: "gooey-logo.png"}) {
          childImageSharp {
            fixed(height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={ data => <Layout data={ data } { ...props }/> }
  />
)

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '8%'
  }
}))

const Layout = ( { data, children } ) => {
  // Define the meta title and description
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const logo = data.file.childImageSharp.fixed

  const classes = useStyles();

  // Load the Prismic edit button
  if(typeof window !== 'undefined' && window.prismic) {
    window.prismic.setupEditButton()
  }

	return(
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Helmet>
      <Header logo={ logo }/>
      <Container className={classes.container}>
        { children }
      </Container>
      <Footer/>
    </Fragment>
	)
}
