import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Check from '../components/svg/check'

export default props => {
  const Description = styled.section`
    display: flex;
    align-items: center;
    margin: 100px 0;
    padding: 0 100px;
    .text {
      flex: 1;
      p {
        font-size: 18px;
        margin: 35px 0;
        max-width: 500px;
        text-align: justify;
      }
      ul {
        li {
          color: ${props.featureColor};
          font-size: 18px;
        }
        svg {
          fill: ${props.featureColor};
          margin-right: 5px;
          width: 15px;
        }
      }
    }
    .illustration {
      flex: 1;
      svg {
        width: 100%;
      }
    }
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      padding: 0 20px;
      .illustration {
        svg {
          margin-top: 30px;
        }
      }
    }
  `

  return (
    <Description>
      <div className="text">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h1>{props.h1}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <p>{props.info}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <ul>
            <li>
              <Check /> {props.feature1}
            </li>
            <li>
              <Check /> {props.feature2}
            </li>
            {props.feature3 ? (
              <li>
                <Check /> {props.feature3}
              </li>
            ) : (
              ''
            )}
          </ul>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        className="illustration"
        animateIn="fadeInRight"
        animateOnce
      >
        {props.illustration}
      </ScrollAnimation>
    </Description>
  )
}
