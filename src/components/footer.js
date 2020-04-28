import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from './logo'
import Triangle from './svg/triangle'

export default () => {
  const intl = useIntl()
  return (
    <Footer>
      <div className="logo">
        <Logo />
        <p>{intl.formatMessage({ id: 'copyright' })}</p>
      </div>
      <div className="links">
        <h5>Services we provide: </h5>
        <div className="urls">
          <Link to="/crowdfunding-marketing">
            <Triangle /> {intl.formatMessage({ id: 'social' })}
          </Link>
          <Link to="/webdev">
            <Triangle /> {intl.formatMessage({ id: 'webdev' })}
          </Link>
          <Link to="/design">
            <Triangle /> {intl.formatMessage({ id: 'design' })}
          </Link>
        </div>
      </div>
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: #434343;
  color: #eee;
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
  .logo {
    a {
      color: #eee;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    h5 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .urls {
      a {
        color: #f97c7c;
        display: block;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    .logo {
      margin-top: 30px;
    }
    .links {
      .urls {
        margin: 0 auto;
        text-align: justify;s
      }
    }
  }
`
