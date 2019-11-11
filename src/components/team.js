import React from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'
import { FormattedMessage } from 'gatsby-plugin-intl'

import TeamCard from '../templates/teamCard'

export default () => (
  <Team id="team">
    <h2>
      <FormattedMessage id="ourTeam" />
    </h2>
    <h3>
      <FormattedMessage id="ourTeamDescription" />
    </h3>
    <ScrollContainer nativeMobileScroll={false} className="cards">
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
    padding: 75px 0 5px 0;
  }
`
