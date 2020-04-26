import React from 'react'
import styled from 'styled-components'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import { PopupWidget } from 'react-calendly'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import ButtonP from './buttonP'
import HeroImg from './svg/heroImg'

export default () => {
  const intl = useIntl()
  return (
    <Hero>
      <div className="info">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h1>
            <FormattedMessage id="header" />
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={100}>
          <p>
            <FormattedMessage id="header-p1" />
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={200}>
          <p>
            <FormattedMessage id="header-p2" />
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={300}>
          <ButtonP
            message={intl.formatMessage({ id: 'bt-contact' })}
            link={`/${intl.formatMessage({ id: 'lang' })}/#contact`}
          />
        </ScrollAnimation>
        <PopupWidget
          color="#F97C7C"
          text={intl.formatMessage({ id: 'bt-call' })}
          url="https://calendly.com/the-tulip/30-min-call"
        />
      </div>
      <ScrollAnimation className="svg" animateIn="fadeInRight" animateOnce>
        <HeroImg />
      </ScrollAnimation>
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
  .svg {
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    .info {
      width: 60%;
    }
    .svg {
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    .info,
    .svg {
      width: 90%;
    }
  }
`
