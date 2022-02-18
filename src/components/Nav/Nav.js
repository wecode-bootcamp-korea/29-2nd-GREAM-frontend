import React, { useState } from 'react';
import Login from './Login/Login';

const Nav = () => {
  const [loginModalState, setLoginModalState] = useState(false);
  const closeLoginModal = () => setLoginModalState(false);

  return (
    <div onKeyUp={e => e.key === 'Escape' && setLoginModalState(false)}>
      <Login
        loginModalState={loginModalState}
        closeLoginModal={closeLoginModal}
      />
      <button onClick={() => setLoginModalState(true)}>로그인</button>
      <div>상단입니다.</div>
    </div>
  );
};

export default Nav;
