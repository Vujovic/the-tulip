import React from 'react'
import styled from 'styled-components'

import Logo from './logo'
import Nav from './nav'
import Hamburger from './hamburger'

export default class SiteHeader extends React.Component {
  state = {
    active: false,
  }
  toggleClassOnClick = () => this.setState({ active: !this.state.active })

  render = () => (
    <Header>
      <Logo />
      <Hamburger toggleClassOnClick={this.toggleClassOnClick} />
      <Nav
        setClass={this.state.active ? '' : 'hidden'}
        toggleClassOnClick={this.toggleClassOnClick}
      />
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto;
  padding: 0 100px;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    padding: 0 10px;
    width: 90%;
  }
`
