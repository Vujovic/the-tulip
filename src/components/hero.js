import React from 'react'
import styled from 'styled-components'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import { PopupWidget } from 'react-calendly'

import ButtonP from './buttonP'
import HeroImg from './svg/heroImg'

export default () => {
  const intl = useIntl()
  return (
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
        <p>
          <FormattedMessage id="header-p3" />
        </p>
        <ButtonP
          message={intl.formatMessage({ id: 'bt-contact' })}
          link={`/${intl.formatMessage({ id: 'lang' })}/#contact`}
        />
        <PopupWidget
          color="#F97C7C"
          text={intl.formatMessage({ id: 'bt-call' })}
          url="https://calendly.com/the-tulip/30-min-call"
        />
      </div>
      <HeroImg />
    </Hero>
  )
}

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
