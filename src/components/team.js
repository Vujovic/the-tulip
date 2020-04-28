import React from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useStaticQuery, graphql } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-intl'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import TeamCard from '../templates/teamCard'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        edges {
          node {
            image {
              childImageSharp {
                fluid(maxWidth: 180, maxHeight: 180, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            key
            linkUrl
          }
        }
      }
    }
  `)
  return (
    <Team id="team">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <h2>
          <FormattedMessage id="ourTeam" />
        </h2>
        <h3>
          <FormattedMessage id="ourTeamDescription" />
        </h3>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <ScrollContainer className="cards">
          {data.allTeamJson.edges.map(card => (
            <TeamCard
              key={card.node.key}
              image={card.node.image.childImageSharp.fluid}
              name={<FormattedMessage id={`${card.node.key}.name`} />}
              title1={<FormattedMessage id={`${card.node.key}.title1`} />}
              title2={<FormattedMessage id={`${card.node.key}.title2`} />}
              description={
                <FormattedMessage id={`${card.node.key}.description`} />
              }
              link={card.node.linkUrl}
            />
          ))}
        </ScrollContainer>
      </ScrollAnimation>
    </Team>
  )
}

const Team = styled.section`
  text-align: center;
  h3 {
    margin: 0 auto;
    max-width: 500px;
  }
  .cards {
    display: flex;
    flex-wrap: nowrap;
    padding: 75px 0 5px 0;
  }
`
