import React from 'react';
import styled, { css } from 'styled-components';

const PurchaseBtn = ({ selectedSize, set, isSell, numberWithCommas }) => {
  return (
    <Box>
      <Button isSell={isSell}>
        {selectedSize === undefined
          ? set.toLocaleString()
          : numberWithCommas(Math.floor(selectedSize))}
      </Button>
    </Box>
  );
};
const Box = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 93%;
  padding: 24px;
  border: none;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius2};
  color: white;
  font-weight: 700;

  ${({ theme, isSell }) => css`}
  background-color: ${isSell ? theme.palette.green : theme.palette.red}`}
`;

export default PurchaseBtn;
