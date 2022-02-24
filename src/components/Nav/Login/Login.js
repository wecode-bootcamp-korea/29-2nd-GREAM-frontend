import React, { useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from '../../../styles/mixin';

const Login = ({ loginModalState, closeLoginModal }) => {
  console.log('login compo', loginModalState);
  const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const [userData, setUserData] = useState({
    id: '',
    pw: '',
  });
  const handleInput = e => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const disabled = !(userData.id.length * userData.pw.length > 1);

  if (!loginModalState) return null;
  else {
    return (
      <>
        <Overlay onClick={closeLoginModal} />
        <LoginArea
          disabled={disabled}
          onKeyUp={e => {
            if (e.key === 'Escape') {
              return closeLoginModal;
            }
          }}
        >
          <LoginTop>
            <span />
            <button onClick={closeLoginModal}>X</button>
          </LoginTop>
          <LogoArea>
            <LogoCharacter src="/images/logo_character.jpg" />
            <Logo alt="logo" src="/images/logo.png" />
            <p>Paint Everything Around Me</p>
          </LogoArea>
          <KakaoArea>
            <KakaoOauthBtn href={KAKAO_OAUTH_URL}>
              <img
                alt="loginButton"
                src="/images/Login/kakao_login_large_wide.png"
              />
            </KakaoOauthBtn>
            <LoginTypeTwo>
              <Direction>계정정보 직접 입력하여 로그인하기</Direction>
              <Input
                type="text"
                placeholder="카카오메일 아이디, 이메일, 전화번호"
                name="id"
                value={userData.id}
                onChange={handleInput}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                name="pw"
                value={userData.pw}
                onChange={handleInput}
              />
              <Button disabled={disabled}>로그인</Button>
            </LoginTypeTwo>
          </KakaoArea>
          <LoginCaution>로그인 완료시 상세정보 확인 가능</LoginCaution>
        </LoginArea>
      </>
    );
  }
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.black};
  opacity: 0.6;
  z-index: 99;
`;

const LoginArea = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2vw 2vw 3vw 2vw;
  width: 30vw;
  height: 70vh;
  background-color: white;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius4};
  z-index: 500;
`;

const LoginTop = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  margin-bottom: -2.5vh;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.palette.grey};
    font-size: 13px;
    cursor: pointer;
  }
`;

const LogoArea = styled.div`
  ${flexAlignCenter}
  flex-direction:column;
  margin-bottom: 5vh;

  p {
    font-size: 1vw;
  }
`;

const LogoCharacter = styled.img`
  width: 30%;
  margin-bottom: -1.5vh;
`;

const Logo = styled.img`
  width: 60%;
  margin-bottom: -1.5vh;
`;

const KakaoArea = styled.div`
  ${flexAlignCenter}
  flex-direction:column;
  margin-top: -5vh;
`;

const KakaoOauthBtn = styled.a`
  ${flexAlignCenter}
  flex-direction:column;

  img {
    width: 90%;
    margin-bottom: 1vh;
    padding-bottom: 1vh;
    border-bottom: solid 1px ${({ theme }) => theme.palette.lightGrey};

    :hover {
      cursor: pointer;
    }
  }
`;

const LoginTypeTwo = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  width: 90%;
  padding-bottom: 1.5vh;
  background-color: #f6f3f3;
  border-radius: 5px;
`;

const Direction = styled.p`
  width: 90%;
  padding: 2vh;
  font-size: 1.1vw;
  text-align: center;
`;

const Input = styled.input`
  width: 90%;
  padding: 1vw;
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.palette.lightGrey};
  font-size: 1vw;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 1.5vh;
  width: 90%;
  padding: 1vw;
  border: none;
  border-radius: 5px;
  background-color: ${({ disabled }) => (disabled ? 'lightgrey' : '#FEE500')};
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: 1vw;
`;

const LoginCaution = styled.div`
  font-size: 0.9vw;
  color: ${({ theme }) => theme.palette.darkGrey};
`;

export default Login;
