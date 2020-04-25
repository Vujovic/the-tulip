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
          title="Product Design"
          desc1="Have an idea about a product but need help with creating it? Look no further, because we can offer experts to work with you and help you realize your idea from start to finish."
          desc2="We offer doing market research, identifying problems, product development, designing informed solutions—and everything in between."
        />
        <Card
          image={data.branding.childImageSharp.fluid}
          title="Branding"
          desc1="Branding is very important because to your bussiness because of the overall impact it makes on your company. Branding can change how people perceive your brand, it can drive new business and increase brand awareness."
          desc2="If you need help with rebranding your company or assist you with branding from the ground up, we got you covered."
        />
        <Card
          image={data.uxUi.childImageSharp.fluid}
          title="UX/UI Design"
          desc1="UX design refers to user experience design, while UI design stands for user interface design. Both of these are crucial to an IT product and need to work closely together."
          desc2="We offer competitor and customer analysis, product structure and strategy, content development, wireframing, prototyping, etc."
        />
      </Cards>
    </Layout>
  )
}
