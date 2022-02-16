import React from 'react';
import styled from 'styled-components';
import InBox from './InBox';

const DetailDesc = ({ productBox }) => {
  return (
    <DescContainer>
      <DescComment>상품 정보</DescComment>
      <DescBox>
        <InBox productBox={productBox} />
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
  font-size: ${({ theme }) => theme.fontSize4};
  font-weight: 700;
  padding: 22px 0;
`;

const DescBox = styled.div`
  border-top: 0.2px solid ${({ theme }) => theme.grey};
  border-bottom: 0.2px solid ${({ theme }) => theme.grey};
`;

export default DetailDesc;
