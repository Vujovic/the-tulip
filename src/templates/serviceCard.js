import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

export default props => {
  const intl = useIntl()

  const Card = styled(ScrollAnimation)`
    background-color: ${props.bg};
    padding: 20px 0;
    width: 25%;
    .icon {
      margin: 0 auto;
      width: 256px;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
      padding: 0 40px;
      text-align: justify;
    }
    a {
      background-color: #fff;
      border-radius: 35px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
      color: ${props.btnColor};
      display: inline-block;
      font-size: 18px;
      font-weight: 600;
      margin-top: 10px;
      padding: 15px 60px;
    }
    @media screen and (max-width: 768px) {
      margin: 20px auto;
      width: 90%;
    }
  `
  return (
    <Card animateIn="fadeInUp" delay={props.delay} animateOnce>
      <div className="icon">
        <Img draggable={false} fluid={props.image} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Link to={props.link}>{intl.formatMessage({ id: 'learnMore' })}</Link>
    </Card>
  )
}
