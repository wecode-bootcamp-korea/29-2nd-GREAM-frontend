import React from 'react';
import styled from 'styled-components';
import StickyBtn from './StickyBtn';

const StickyBtnBox = () => {
  return (
    <OutBox>
      <StickyBtn></StickyBtn>
    </OutBox>
  );
};

const OutBox = styled.div`
  height: 20000px;
`;

export default StickyBtnBox;
