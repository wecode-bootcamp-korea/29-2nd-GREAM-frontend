import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter } from '../../../styles/mixin';
import { BASE_URL } from '../../../config';

const OAuthHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const authorizeCode = location.search.slice(6);
    fetch(`${BASE_URL}/users/login?code=${authorizeCode}`)
      .then(res => res.json())
      .then(res => {
        navigate(-1);
        window.sessionStorage.setItem('JWT', res.access_token);
      });
  }, [location]);

  return (
    <OAth>
      <Content>
        <img alt="logo_character" src="/images/logo_character.jpg" />
        <div> 소셜 로그인 진행 중 :) </div>
      </Content>
    </OAth>
  );
};

const OAth = styled.div`
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
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  font-size: 5vh;

  img {
    width: 30%;
    margin-top: 30vh;
    margin-bottom: 5vh;
  }
`;

export default OAuthHandler;
