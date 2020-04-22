import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default props => {
  const intl = useIntl()

  return (
    <Card>
      <div className="image">
        <Img draggable={false} fluid={props.image} />
      </div>
      <h4>{props.name}</h4>
      <h5>{props.title1}</h5>
      <h5>{props.title2}</h5>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {intl.formatMessage({ id: 'learnMore' })}
      </a>
    </Card>
  )
}

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  height: 500px;
  width: 350px;
  margin: 0 40px;
  padding-bottom: 20px;
  flex: 0 0 auto;
  .image {
    background-color: #eee;
    border-radius: 50%;
    height: 180px;
    width: 180px;
    margin: 20px auto;
  }
  h4 {
    font-size: 30px;
    font-weight: 400;
  }
  h5 {
    color: #595959;
    font-size: 18px;
    font-weight: 400;
  }
  p {
    font-size: 16px;
    min-height: 135px;
    padding: 20px;
    text-align: justify;
  }
  a {
    font-size: 18px;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    max-width: 225px;
    margin: 0 20px;
    .image {
      height: 100px;
      width: 100px;
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
      min-height: 190px;
      padding-bottom: 0;
    }
    
`
