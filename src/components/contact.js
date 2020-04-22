import React from 'react'
import styled from 'styled-components'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

import Illustration from './svg/contactImg'

export default () => {
  const intl = useIntl()
  return (
    <Contact id="contact">
      <h2>
        <FormattedMessage id="contactUs" />
      </h2>
      <h3>
        <FormattedMessage id="contactDescription" />
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
            <FormattedMessage id="formName" />{' '}
            <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={intl.formatMessage({ id: 'formNamePlaceholder' })}
            required
          />
          <label htmlFor="email">
            <FormattedMessage id="formEmail" />{' '}
            <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={intl.formatMessage({ id: 'formEmailPlaceholder' })}
            required
          />
          <label htmlFor="subject">
            <FormattedMessage id="formSubject" />
            <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder={intl.formatMessage({ id: 'formSubjectPlaceholder' })}
            required
          />
          <label htmlFor="message">
            <FormattedMessage id="formMessage" />{' '}
            <span style={{ color: 'red' }}>*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder={intl.formatMessage({ id: 'formMessagePlaceholder' })}
            required
          />
          <input
            className="formButton"
            type="submit"
            value={intl.formatMessage({ id: 'bt-sendMsg' })}
          />
        </form>
      </div>
    </Contact>
  )
}

const Contact = styled.section`
  margin: 0 auto;
  max-width: 1280px;
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
        margin-top: 10px;
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
