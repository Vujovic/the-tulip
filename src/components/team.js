import React from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'

import TeamCard from '../templates/teamCard'

export default () => (
  <Team id="team">
    <h2>OUR TEAM</h2>
    <h3>
      Meet our passionate team of professionals who are always ready to help you
      achieve your goals
    </h3>
    <ScrollContainer className="cards">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </ScrollContainer>
  </Team>
)

const Team = styled.section`
  text-align: center;
  h3 {
    margin: 0 auto;
    max-width: 500px;
  }
  .cards {
    display: flex;
    flex-wrap: nowrap;
    padding: 75px 0;
  }
`
