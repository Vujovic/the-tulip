import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Template from '../templates/moreInfoPages'
import Illustration from '../components/svg/design'
import Cards from '../templates/cardsOverlay'
import Card from '../templates/serviceDetailCard'

export default props => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      productDesign: file(
        relativePath: { eq: "services/design/ProductDesign.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      branding: file(relativePath: { eq: "services/design/Branding.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      uxUi: file(relativePath: { eq: "services/design/UxUi.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: 'designPage' })}
      />
      <Template
        h1={intl.formatMessage({ id: 'designPage' })}
        info={intl.formatMessage({ id: 'designContent' })}
        featureColor={'#378663'}
        feature1={intl.formatMessage({ id: 'designFeature1' })}
        feature2={intl.formatMessage({ id: 'designFeature2' })}
        feature3={intl.formatMessage({ id: 'designFeature3' })}
        illustration={<Illustration />}
      />
      <Cards>
        <Card
          image={data.productDesign.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'designFeature1' })}
          desc1={intl.formatMessage({ id: 'productDesignDesc1' })}
          desc2={intl.formatMessage({ id: 'productDesignDesc2' })}
        />
        <Card
          image={data.branding.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'designFeature2' })}
          desc1={intl.formatMessage({ id: 'brandingDesc1' })}
          desc2={intl.formatMessage({ id: 'brandingDesc2' })}
        />
        <Card
          image={data.uxUi.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'designFeature3' })}
          desc1={intl.formatMessage({ id: 'uxuiDesc1' })}
          desc2={intl.formatMessage({ id: 'uxuiDesc2' })}
        />
      </Cards>
    </Layout>
  )
}
