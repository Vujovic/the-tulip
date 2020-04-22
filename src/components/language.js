import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import styled from 'styled-components'

const languageName = {
  en: 'EN',
  zh: '中文',
}

export default () => (
  <div>
    <LangBar>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#ffffff` : `#f97c7c`,
                backgroundColor:
                  currentLocale === language ? `#f97c7c` : `#ffffff`,
              }}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </LangBar>
  </div>
)

const LangBar = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: inline-block;
  margin-right: 5px;
  button {
    background-color: #f97c7c;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    line-height: 16px;
    font-size: 14px;
    font-weight: 600;
    height: 100%;
    padding: 10px 0;
    width: 55px;
  }
  @media screen and (max-width: 768px) {
    button {
      font-size: 12px;
      width: 40px;
    }
  }
`
