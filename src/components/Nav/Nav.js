import React, { useState } from 'react';
import Login from './Login/Login';

const Nav = () => {
  const [modalState, setModalState] = useState(false);
  const closeModal = () => setModalState(false);

  return (
    <div onKeyUp={e => e.key === 'Escape' && setModalState(false)}>
      <Login modalState={modalState} closeModal={closeModal} />
      <button onClick={() => setModalState(true)}>로그인</button>
      <div>상단입니다.</div>
    </div>
  );
};

export default Nav;
