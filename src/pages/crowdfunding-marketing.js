import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Template from '../templates/moreInfoPages'
import Illustration from '../components/svg/crowdfundingMarketing'
import Cards from '../templates/cardsOverlay'
import Card from '../templates/serviceDetailCard'

export default () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      cf: file(relativePath: { eq: "services/cm/Crowdfunding.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      smm: file(relativePath: { eq: "services/cm/SocialMediaMarketing.png" }) {
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
      <SEO lang={intl.locale} title={intl.formatMessage({ id: 'cmPage' })} />
      <Template
        h1={intl.formatMessage({ id: 'cmPage' })}
        info={intl.formatMessage({ id: 'socialContent' })}
        featureColor={'#F97C7C'}
        feature1={intl.formatMessage({ id: 'cmFeature1' })}
        feature2={intl.formatMessage({ id: 'cmFeature2' })}
        illustration={<Illustration />}
      />
      <Cards>
        <Card
          image={data.cf.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'cmFeature1' })}
          desc1={intl.formatMessage({ id: 'crowdfundingDesc1' })}
          desc2={intl.formatMessage({ id: 'crowdfundingDesc2' })}
        />
        <Card
          image={data.smm.childImageSharp.fluid}
          title={intl.formatMessage({ id: 'cmFeature2' })}
          desc1={intl.formatMessage({ id: 'smmDesc1' })}
          desc2={intl.formatMessage({ id: 'smmDesc2' })}
        />
      </Cards>
    </Layout>
  )
}
