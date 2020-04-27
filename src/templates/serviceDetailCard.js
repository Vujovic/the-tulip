import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

export default props => {
  return (
    <Card animateIn="fadeInUp" delay={props.delay} animateOnce>
      <div className="icon">
        <Img draggable={false} fluid={props.image} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.desc1}</p>
      <p>{props.desc2}</p>
    </Card>
  )
}

const Card = styled(ScrollAnimation)`
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
