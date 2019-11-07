import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from './header'
import Footer from './footer'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
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
    @media screen and (max-width: 768px) {
      overflow-x: hidden;
      h1, h2 {
        font-size: 36px
      }
      h3 {
        font-size: 18px;
      }
    }
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

  h2 {
    font-size: 36px;
  }

  h3 {
    color: #595959;
    font-size: 24px;
    font-weight: 400;
    padding: 10px;
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
    @media screen and (max-width: 768px) {
      left: -105%;
      overflow-x: hidden;
    }
  }
`
