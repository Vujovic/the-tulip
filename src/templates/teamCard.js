import React from 'react'
import styled from 'styled-components'

import IconSite from '../components/svg/site'
import IconLinkedin from '../components/svg/linkedin'

export default () => (
  <Card>
    <div className="image"></div>
    <h4>Milan Mandic</h4>
    <h5>Founder,</h5>
    <h5>CEO</h5>
    <p>
      Product designer for almost 15 years, Bojan was involved with many clients
      and companies providing conceptual and full product development service
      delivering fresh solutions for everyday products.{' '}
    </p>
    <div className="social">
      <a
        href="https://bojandesign.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Personal website link"
      >
        <IconSite />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <IconLinkedin />
      </a>
    </div>
  </Card>
)

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
    padding: 20px;
    text-align: justify;
  }
  .social {
    svg {
      margin: 0 5px;
      transition: all 0.2s;
      :hover {
        fill: #cd6565;
      }
    }
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
    }
    .social {
      a {
        display: inline-block;
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`
