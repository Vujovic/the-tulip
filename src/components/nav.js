import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'

import Language from './language'

export default props => {
  const intl = useIntl()
  return (
    <Nav className={props.setClass}>
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <FormattedMessage id="home" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FormattedMessage id="services" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FormattedMessage id="team" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FormattedMessage id="contact" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FormattedMessage id="blog" />
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
    top: 100px;
    right: 0;
    transition: all 0.5s;
    .nav-menu {
      flex-direction: column;
      li {
        margin: 30px 0;
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