import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default props => {
  return (
    <Card>
      <div className="icon">
        <Img draggable={false} fluid={props.image} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.desc1}</p>
      <p>{props.desc2}</p>
    </Card>
  )
}

const Card = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  margin: 20px;
  padding: 20px;
  .icon {
    margin: 0 auto;
    max-width: 256px;
  }
  h2 {
    margin: 30px auto;
    text-align: center;
  }
  p {
    margin: 5px auto;
    max-width: 400px;
    text-align: justify;
  }
`
