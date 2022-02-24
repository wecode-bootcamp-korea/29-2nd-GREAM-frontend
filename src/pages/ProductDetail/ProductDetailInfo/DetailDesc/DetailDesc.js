import React from 'react';
import styled from 'styled-components';
import InBox from './InBox';

const DetailDesc = ({ productData, numberWithCommas }) => {
  return (
    <DescContainer>
      <DescComment>상품 정보</DescComment>
      <DescBox>
        <InBox productData={productData} numberWithCommas={numberWithCommas} />
      </DescBox>
    </DescContainer>
  );
};

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const DescComment = styled.div`
  font-size: ${({ theme }) => theme.fontsize.fontSize4};
  font-weight: 700;
  padding: 39px 0 13px 0;
`;

const DescBox = styled.div`
  border-top: 0.2px solid ${({ theme }) => theme.palette.lightGrey};
  border-bottom: 0.2px solid ${({ theme }) => theme.palette.lightGrey};
`;

export default DetailDesc;
