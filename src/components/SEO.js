import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery,graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({title,description}) => {
    const {site}=useStaticQuery(query)
    const metaDescription=description ||site.siteMetadata.description
  return (
    <Helmet
    htmlAttributes={{lang: 'ru'}} 
    title={`${title} | ${site.siteMetadata.title}`} 
    meta={[{content: description,
            name: metaDescription}]}></Helmet>
  )
}

export default SEO