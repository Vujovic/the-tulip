import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-intl'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Card from '../templates/serviceCard'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allCardsJson {
        edges {
          node {
            bg
            btnColor
            title
            content
            key
            link
            icon {
              childImageSharp {
                fluid(maxWidth: 280, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Services id="services">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <h2>
          <FormattedMessage id="services" />
        </h2>
        <h3>
          <FormattedMessage id="servicesDescription" />
        </h3>
      </ScrollAnimation>
      <div className="cards">
        {data.allCardsJson.edges.map((card, index) => (
          <Card
            key={card.node.key}
            title={<FormattedMessage id={card.node.title} />}
            text={<FormattedMessage id={card.node.content} />}
            bg={card.node.bg}
            btnColor={card.node.btnColor}
            link={card.node.link}
            image={card.node.icon.childImageSharp.fluid}
            delay={100 * index}
          />
        ))}
      </div>
    </Services>
  )
}

const Services = styled.section`
  text-align: center;
  h3 {
    margin: 0 auto;
    max-width: 500px;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
    padding: 75px 0 5px 0;
  }
  @media screen and (max-width: 768px) {
    .cards {
      flex-direction: column;
    }
  }
`
