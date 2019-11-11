import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

import Language from './language'

export default props => {
  const intl = useIntl()
  return (
    <Nav className={props.setClass}>
      <ul className="nav-menu">
        <li>
          <Link
            to={`/${intl.formatMessage({ id: 'lang' })}/`}
            onClick={props.toggleClassOnClick}
          >
            <FormattedMessage id="home" />
          </Link>
        </li>
        <li>
          <Link
            to={`/${intl.formatMessage({ id: 'lang' })}/#services`}
            onClick={props.toggleClassOnClick}
          >
            <FormattedMessage id="services" />
          </Link>
        </li>
        <li>
          <Link
            to={`/${intl.formatMessage({ id: 'lang' })}/#team`}
            onClick={props.toggleClassOnClick}
          >
            <FormattedMessage id="team" />
          </Link>
        </li>
        <li>
          <Link
            to={`/${intl.formatMessage({ id: 'lang' })}/#contact`}
            onClick={props.toggleClassOnClick}
          >
            <FormattedMessage id="contact" />
          </Link>
        </li>
      </ul>
      <Language />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  z-index: 50;
  .nav-menu {
    display: flex;
    li {
      margin: 0 15px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 1280px) {
    background-color: #fff;
    flex-direction: column;
    min-width: 30%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.5s;
    .nav-menu {
      flex-direction: column;
      margin-top: 25%;
      li {
        margin: 50px 0;
        text-align: center;
      }
    }
    > div {
      margin: 0 auto 30px auto;
    }
  }
  @media screen and (max-width: 768px) {
    left: 0;
    width: 100vw;
  }
`
