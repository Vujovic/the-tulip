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
          title="Crowdfunding"
          desc1="With platforms like Kickstarter or Indiegogo, you are able to fund your idea and create a fresh audience behind the movement or product you are working on. Our team members are running crowdfunding campaigns since 2011 and funded millions for the clients."
          desc2="Let us create, run and manage your crowdfunding campaigns from start to end!"
        />
        <Card
          image={data.smm.childImageSharp.fluid}
          title="Social Media Marketing"
          desc1="Social media marketing is for a long time the best way to find your target audience and get your brand recognized. Paid Ads are managed through major services like Facebook, Instagram, Google Ads, YouTube and others, with the aim to analyze and achieve the most optimal exposure within your marketing budget. "
          desc2="Our ads specialists will use your funds to test and deliver international audience directing them to your website or service. The process is measured and precise."
        />
      </Cards>
    </Layout>
  )
}
