import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBox } from '@fortawesome/free-solid-svg-icons';
import ShippingInfo from './ShippingInfo';

const DeliveryBox = () => {
  return (
    <OutBox>
      <Comment>배송 정보</Comment>
      <Fast>
        <FontAwesomeIcon icon={faBolt} className="bolt" />
        <ShippingInfo fast={true} />
      </Fast>
      <Fast second>
        <FontAwesomeIcon icon={faBox} className="box" />
        <ShippingInfo fast={false} />
      </Fast>
    </OutBox>
  );
};

const OutBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontsize.fontSize4};
`;

const Comment = styled.p`
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  color: ${({ theme }) => theme.palette.grey};
`;

const Fast = styled.div`
  display: flex;
  margin: 14px 0;

  .bolt {
    color: ${({ theme }) => theme.palette.green};
    font-size: 28px;
    margin-top: 8px;
  }

  .box {
    color: bisque;
    font-size: 28px;
    margin-top: 6px;
  }
`;

export default DeliveryBox;
