import React from 'react'
import styled from 'styled-components'

import Chat from './svg/chat'

export default props => (
  <Button>
    <div className="icon">
      <Chat />
    </div>
    {props.message}
  </Button>
)

const Button = styled.a`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  color: #434343;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 205px;
  .icon {
    background-color: #f97c7c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    height: 55px;
    width: 55px;
    transition: all 0.2s;
  }
  :hover {
    .icon {
      background-color: #cd6565;
    }
  }
`
