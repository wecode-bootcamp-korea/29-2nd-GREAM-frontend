import React from 'react';
import styled from 'styled-components';

const ModalContents = ({ productBox, setSelectedSize }) => {
  return (
    <OutBox>
      {productBox[0].size.map((x, index) => (
        <SizeBtn key={index} onClick={() => setSelectedSize(x.price)}>
          <Box>
            <Size>{x.size}</Size>
            <Price>{x.price.toLocaleString()}</Price>
          </Box>
        </SizeBtn>
      ))}
    </OutBox>
  );
};
const OutBox = styled.div`
  padding: 20px;
`;

const SizeBtn = styled.button`
  width: 100%;
  border: 0.2px solid ${({ theme }) => theme.palette.grey};
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius2};
  background-color: white;
  padding: 16px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Size = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
  font-weight: 700;
  margin-bottom: 3px;
`;

const Price = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.red};
`;

export default ModalContents;
