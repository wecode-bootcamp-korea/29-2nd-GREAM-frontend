import React from 'react';
import styled from 'styled-components';
import StickyBtn from './StickyBtn';

const StickyBtnBox = ({ sizeBox, productData }) => {
  return (
    <OutBox>
      <StickyBtn sizeBox={sizeBox} productData={productData} />
    </OutBox>
  );
};

const OutBox = styled.div``;

export default StickyBtnBox;
