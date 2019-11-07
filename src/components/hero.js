import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

import ButtonP from './buttonP'
import HeroImg from './svg/heroImg'

export default () => (
  <Hero>
    <div className="info">
      <h1>
        <FormattedMessage id="header" />
      </h1>
      <p>
        <FormattedMessage id="header-p1" />
      </p>
      <p>
        <FormattedMessage id="header-p2" />
      </p>
      <ButtonP message={<FormattedMessage id="bt-contact" />} />
    </div>
    <HeroImg />
  </Hero>
)

const Hero = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-around;
  .info {
    font-size: 18px;
    width: 30%;
    > * {
      margin: 30px 0;
    }
  }
  > svg {
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    .info {
      width: 60%;
    }
    svg {
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    .info,
    svg {
      width: 90%;
    }
  }
`
