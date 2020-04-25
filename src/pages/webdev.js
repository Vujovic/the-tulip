import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Template from '../templates/moreInfoPages'
import Illustration from '../components/svg/webdev'
import Cards from '../templates/cardsOverlay'
import Card from '../templates/serviceDetailCard'

export default () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      seo: file(relativePath: { eq: "services/webdev/SEO.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      responsive: file(relativePath: { eq: "services/webdev/Responsive.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      fast: file(relativePath: { eq: "services/webdev/Fast.png" }) {
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
        title={intl.formatMessage({ id: 'developmentPage' })}
      />
      <Template
        h1={intl.formatMessage({ id: 'developmentPage' })}
        info={intl.formatMessage({ id: 'webdevContent' })}
        featureColor={'#4797B0'}
        feature1={intl.formatMessage({ id: 'developmentFeature1' })}
        feature2={intl.formatMessage({ id: 'developmentFeature2' })}
        feature3={intl.formatMessage({ id: 'developmentFeature3' })}
        illustration={<Illustration />}
      />
      <Cards>
        <Card
          image={data.seo.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'developmentFeature1' })}
          desc1={intl.formatMessage({ id: 'seoDesc1' })}
          desc2={intl.formatMessage({ id: 'seoDesc2' })}
        />
        <Card
          image={data.responsive.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'developmentFeature2' })}
          desc1={intl.formatMessage({ id: 'responsiveDesc1' })}
          desc2={intl.formatMessage({ id: 'responsiveDesc2' })}
        />
        <Card
          image={data.fast.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'developmentFeature3' })}
          desc1={intl.formatMessage({ id: 'fastDesc1' })}
          desc2={intl.formatMessage({ id: 'fastDesc2' })}
        />
      </Cards>
    </Layout>
  )
}
