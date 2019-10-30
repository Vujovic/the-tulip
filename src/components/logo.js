import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default () => (
  <Logo to="/">
    <svg
      viewBox="0 0 99 101"
      fill="#FC6C6C"
      fill-opacity="0.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32.0672 80.4733C18.6024 68.1169 0.987783 36.9825 38.2479 11.2956C51.3374 24.9627 68.4266 57.9323 32.0672 80.4733Z" />
      <path d="M32.0534 80.3497C49.4867 85.8324 85.2572 85.5199 88.8727 40.4083C70.4918 35.906 33.3948 37.5911 32.0534 80.3497Z" />
      <path d="M32.0581 80.4423C50.1734 78.0302 82.449 62.6057 66.6291 20.2044C48.0704 23.9059 15.174 41.1354 32.0581 80.4423Z" />
    </svg>
    The Tulip
  </Logo>
)

const Logo = styled(Link)`
  color: #434343;
  font-size: 36px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.7;
  }

  svg {
    width: 70px;
  }
`
