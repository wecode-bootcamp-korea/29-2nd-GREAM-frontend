import React from 'react';
import styled, { css } from 'styled-components';

const PurchaseBtn = ({ productBox, selectedSize, set }) => {
  return (
    <Box>
      <Button fast>
        {selectedSize === undefined
          ? set.toLocaleString()
          : selectedSize.toLocaleString()}
      </Button>
      <Button>280,000</Button>
    </Box>
  );
};
const Box = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 48%;
  border: none;
  padding: 24px;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius2};
  color: white;
  font-weight: 700;

  ${({ theme, fast }) => css`}
  background-color: ${fast ? theme.palette.red : theme.palette.black}`}
`;

export default PurchaseBtn;
