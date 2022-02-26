import React from 'react';
import styled, { css } from 'styled-components';

const InBox = ({ productData, numberWithCommas }) => {
  function formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  return (
    <StyledWrapBox numberWithCommas={numberWithCommas}>
      <StyledOutBox>
        <NumComment>모델번호</NumComment>
        <Num bold>{productData?.model_number}</Num>
      </StyledOutBox>
      <StyledOutBox>
        <NumComment>출시일</NumComment>
        <Num>{formatDate(productData?.release_date)}</Num>
      </StyledOutBox>
      <StyledOutBox>
        <NumComment>테마</NumComment>
        <Num>{productData?.theme}</Num>
      </StyledOutBox>
      <StyledOutBox>
        <NumComment primary>발매가</NumComment>
        <Num primary>
          {numberWithCommas(Math.floor(productData?.release_price))}
        </Num>
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
  color: ${({ theme }) => theme.palette.grey};
  border-right: 0.2px solid ${({ theme }) => theme.palette.lightGrey};
  line-height: 24px;

  ${props =>
    props.primary &&
    css`
      border-right: none;
    `}
`;

const Num = styled.div`
  font-size: ${({ theme }) => theme.fontsize2};
  border-right: 0.2px solid ${({ theme }) => theme.palette.lightGrey};

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
