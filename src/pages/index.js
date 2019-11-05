import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ButtonP from '../components/buttonP'
import HeroImg from '../components/svg/heroImg'

export default () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO lang={Intl.locale} title={intl.formatMessage({ id: 'title' })} />
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
    </Layout>
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
