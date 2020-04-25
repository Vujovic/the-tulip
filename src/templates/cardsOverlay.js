import React from 'react'
import styled from 'styled-components'

export default props => <Cards>{props.children}</Cards>

const Cards = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
