import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  font-weight: 700;
  border: none;
  width: 48%;
  color: white;
  padding: 20px;

  ${({ theme, cell }) => css`
    border-radius: ${theme.btnRadius.btnRadius2};
    background-color: ${cell ? theme.palette.green : theme.palette.red};
  `}
`;

export default Button;
