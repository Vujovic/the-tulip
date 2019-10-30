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
    font-family: 'Lato', sans-serif;
  }
`
