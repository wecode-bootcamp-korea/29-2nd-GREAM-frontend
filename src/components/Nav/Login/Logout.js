import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter } from '../../../styles/mixin';

function Logout() {
  const navigate = useNavigate();

  return (
    <LogoutWrap>
      <Content>
        <img alt="logo_character" src="/images/logo_character.jpg" />
        <div> 다음에 또 만나요 :) </div>
        <button onClick={() => navigate('/list')}>
          {' '}
          GREAM 메인으로 돌아가기{' '}
        </button>
      </Content>
    </LogoutWrap>
  );
}

const LogoutWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 1000;
`;

const Content = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  font-size: 5vh;

  img {
    width: 30%;
    margin-top: 15vh;
    margin-bottom: 5vh;
  }

  button {
    margin: 3vw;
    padding: 0.3vh;
    background-color: transparent;
    border: none;
    border-bottom: solid 1px;
    cursor: pointer;
  }
`;

export default Logout;
