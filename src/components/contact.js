import React from 'react'
import styled from 'styled-components'

import Illustration from './svg/contactImg'

export default () => (
  <Contact id="contact">
    <h2>CONTACT US</h2>
    <h3>
      Interested in what we have to offer? Send us an email and we'll get back
      to you soon!
    </h3>
    <div className="form">
      <Illustration />
      <form
        name="contact"
        action="success"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">
          Full name <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name..."
          required
        />
        <label htmlFor="email">
          Email address <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your business email..."
          required
        />
        <label htmlFor="subject">
          Subject <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter the subject of your message..."
          required
        />
        <label htmlFor="message">
          Message <span style={{ color: 'red' }}>*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows="6"
          placeholder="Tell us a bit about your project..."
          required
        />
        <input className="formButton" type="submit" value="Send message" />
      </form>
    </div>
  </Contact>
)

const Contact = styled.section`
  text-align: center;
  h3 {
    margin: 0 auto;
    max-width: 500px;
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    > svg {
      width: 40%;
    }
    form {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      text-align: justify;
      padding: 80px 0;
      width: 35%;
      input,
      textarea {
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        margin-bottom: 50px;
        padding: 20px 25px;
        ::placeholder {
          font-family: 'Lato', sans-serif;
          font-size: 18px;
        }
      }
      .formButton {
        background-color: #f97c7c;
        color: #eee;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .form {
      flex-direction: column;
      > svg {
        width: 50%;
      }
      form {
        width: 75%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .form {
      > svg {
        display: none;
      }
      form {
        width: 90%;
      }
    }
  }
`
