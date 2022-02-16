import React from 'react';
import styled from 'styled-components';

const ShippingInfo = ({ fast }) => {
  return (
    <ShippingBox fast={fast}>
      <div>
        <span>{fast ? '빠른배송' : '일반배송'}</span>
        <span>{fast ? '5,000원' : '3,000원'}</span>
      </div>
      <div>
        <span>{fast ? '지금 결제시' : '검수 후 배송'}</span>
        <span>{fast ? '내일 2/17 (목) 도착 예정' : '5-7일 내 도착 예정'}</span>
      </div>
    </ShippingBox>
  );
};

const ShippingBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  margin-left: 18px;
  padding-bottom: 20px;
  border-bottom: 0.2px solid ${({ theme }) => theme.palette.grey};

  div {
    line-height: 20px;

    &:first-child {
      span {
        margin-right: 5px;

        &:first-child {
          font-weight: 700;
        }
      }
    }
    &:last-child {
      span {
        margin-right: 5px;

        &:last-child {
          color: ${props => (props.fast ? '#297dcb' : 'black')};
        }
      }
    }
  }
`;

export default ShippingInfo;
