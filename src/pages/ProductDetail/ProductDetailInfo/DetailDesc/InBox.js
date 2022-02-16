import React from 'react';
import styled, { css } from 'styled-components';

const InBox = ({ productBox }) => {
  return (
    <StyledWrapBox>
      <StyledOutBox>
        <NumComment>모델번호</NumComment>
        <Num bold>{productBox[0]?.model_number}</Num>
      </StyledOutBox>
      <StyledOutBox>
        <NumComment>출시일</NumComment>
        <Num>{productBox[0]?.release_date}</Num>
      </StyledOutBox>
      <StyledOutBox>
        <NumComment>재료</NumComment>
        <Num>{productBox[0]?.material}</Num>
      </StyledOutBox>
      <StyledOutBox>
        <NumComment primary>발매가</NumComment>
        <Num primary>{productBox[0]?.release_price.toLocaleString()}원</Num>
      </StyledOutBox>
    </StyledWrapBox>
  );
};
const StyledWrapBox = styled.div`
  display: flex;
`;

const StyledOutBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 25%;
`;

const NumComment = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.grey};
  border-right: 0.2px solid ${({ theme }) => theme.grey};
  line-height: 24px;

  ${props =>
    props.primary &&
    css`
      border-right: none;
    `}
`;

const Num = styled.div`
  font-size: ${({ theme }) => theme.fontsize2};
  border-right: 0.2px solid ${({ theme }) => theme.grey};

  ${props =>
    props.primary &&
    css`
      border-right: none;
    `}

  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`;

export default InBox;
