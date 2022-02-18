import React from 'react';
import styled from 'styled-components';

const ModalTop = ({ productBox }) => {
  const imgStyles = {
    width: '80px',
    height: '80px',
    borderRadius: '10px',
  };

  return (
    <Top>
      <InfoOutBox>
        <img src={productBox?.images?.[0]?.url} alt="img" style={imgStyles} />
        <InfoBox>
          <ModelNum>{productBox?.model_number}</ModelNum>
          <Name>{productBox?.name}</Name>
        </InfoBox>
      </InfoOutBox>
    </Top>
  );
};

const Top = styled.div`
  display: flex;
  margin: 20px;
  border-bottom: 0.2px solid ${({ theme }) => theme.palette.grey};
`;

const InfoOutBox = styled.div`
  display: flex;
  padding-bottom: 19px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-bottom: 14px;
  line-height: 20px;
`;

const ModelNum = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
`;

const Name = styled.p`
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
`;

export default ModalTop;
