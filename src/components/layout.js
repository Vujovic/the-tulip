import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from './header'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
  </>
)

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    outline: none; // Temporary Fix
  }

  body {
    color: #434343;
    font-family: 'Lato', sans-serif;
  }

  section {
    padding: 75px 0;
    @media screen and (max-width: 768px) {
      padding 25px 0;
    }
  }

  h1 {
    font-size: 48px;
  }

  li {
    list-style-type: none;
  }

  a {
    color: #F97C7C;
    text-decoration: none;
  }

  .hidden {
    @media screen and (max-width: 1280px) {
      right: -100%;
    }
    @media screen and (max-width: 769px) {
      left: -100%;
    }
  }
`
