import React from 'react'
import styled from 'styled-components'

import Language from './language'
import Logo from './logo'
import Hamburger from './hamburger'

export default ({ siteTitle }) => (
  <Header>
    <Logo />
    <Language />
    <Hamburger />
  </Header>
)

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  text-decoration: none;
  > * {
    width: calc(100% / 3);
  }
`
