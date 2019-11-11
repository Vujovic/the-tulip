import React from 'react'
import styled from 'styled-components'

export default props => (
  <Hamburger>
    <button
      onClick={props.toggleClassOnClick}
      aria-label="Navigation menu"
      type="button"
    >
      <svg
        width="31"
        height="21"
        viewBox="0 0 31 21"
        fill="#F97C7C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.1133 3H0.113281V0H30.1133V3Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.1133 12H0.113281V9H30.1133V12Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.1133 21H0.113281V18H30.1133V21Z"
        />
      </svg>
    </button>
  </Hamburger>
)

const Hamburger = styled.div`
  button {
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    display: none;
    position: fixed;
    top: 20px;
    right: 50px;
    width: 56px;
    height: 56px;
    z-index: 100;
    @media screen and (max-width: 1280px) {
      display: inline-block;
    }
    @media screen and (max-width: 768px) {
      right: 10px;
    }
  }
`
