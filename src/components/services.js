import React from 'react'
import styled from 'styled-components'

import Card from '../templates/serviceCard'

export default () => (
  <Services id="services">
    <h2>SERVICES</h2>
    <h3>
      We provide top quality services in every major aspect of your online
      presence
    </h3>
    <div className="cards">
      <Card />
      <Card />
      <Card />
    </div>
  </Services>
)

const Services = styled.section`
  text-align: center;
  h3 {
    margin: 0 auto;
    max-width: 500px;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    padding: 75px 0 5px 0;
  }
`
