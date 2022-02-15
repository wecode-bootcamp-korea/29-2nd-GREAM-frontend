import React from 'react';
import styled, { css } from 'styled-components';

const Btn = ({ children, color, outline, fullWidth, size, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
export default Btn;

Btn.defaultProps = {
  color: 'white',
  size: 'medium',
};

const colorStyles = css`
  ${({ theme, color, outline }) => css`
    background: ${theme.palette[color]};
    ${outline &&
    css`
      color: ${theme.palette[color]};
      background: none;
      border: 1px solid ${theme.palette[color]};
    `}
  `}
`;

const SIZES = {
  medium: {
    height: '50px',
    fontSize: '12px',
  },
  small: {
    height: '30px',
    fontSize: '15px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${SIZES[size].height};
    font-size: ${SIZES[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius0};
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`;
