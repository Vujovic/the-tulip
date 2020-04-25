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
          title="SEO friendly"
          desc1="Have an idea about a product but need help with creating it? Look no further, because we can offer experts to work with you and help you realize your idea from start to finish."
          desc2="We offer doing market research, identifying problems, product development, designing informed solutions—and everything in between."
        />
        <Card
          image={data.responsive.childImageSharp.fluid}
          title="Responsive"
          desc1="Branding is very important because to your bussiness because of the overall impact it makes on your company. Branding can change how people perceive your brand, it can drive new business and increase brand awareness."
          desc2="If you need help with rebranding your company or assist you with branding from the ground up, we got you covered."
        />
        <Card
          image={data.fast.childImageSharp.fluid}
          title="Fast"
          desc1="UX design refers to user experience design, while UI design stands for user interface design. Both of these are crucial to an IT product and need to work closely together."
          desc2="We offer competitor and customer analysis, product structure and strategy, content development, wireframing, prototyping, etc."
        />
      </Cards>
    </Layout>
  )
}
