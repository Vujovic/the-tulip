import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-intl'

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
                fluid(quality: 100) {
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
      <h2>
        <FormattedMessage id="services" />
      </h2>
      <h3>
        <FormattedMessage id="servicesDescription" />
      </h3>
      <div className="cards">
        {data.allCardsJson.edges.map(card => (
          <>
            <Card
              key={card.node.key}
              title={<FormattedMessage id={card.node.title} />}
              text={<FormattedMessage id={card.node.content} />}
              bg={card.node.bg}
              btnColor={card.node.btnColor}
              link={card.node.link}
              image={card.node.icon.childImageSharp.fluid}
            />
            {console.log(card.node.icon.childImageSharp.fluid)}
          </>
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
    padding: 75px 0 5px 0;
  }
  @media screen and (max-width: 768px) {
    .cards {
      flex-direction: column;
    }
  }
`
