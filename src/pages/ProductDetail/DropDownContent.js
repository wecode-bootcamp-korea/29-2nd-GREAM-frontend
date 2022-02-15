import React from 'react';
import styled, { css } from 'styled-components';

const DropDownContent = ({ children, fullWidth, size, outline, ...rest }) => {
  return (
    <StyledDropDown
      outine={outline}
      fullWidth={fullWidth}
      size={size}
      {...rest}
    >
      {children}
    </StyledDropDown>
  );
};

export default DropDownContent;

DropDownContent.defaultProps = {
  color: 'white',
  size: 'medium',
};

const SIZES = {
  medium: {
    fontSize: '12px',
  },
  small: {
    fontSize: '15px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
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

const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: 'Noto Sans KR', sans-serif;
  outline: none;
  border: 0;
  padding-right: 1rem;
  ${sizeStyles}
  ${fullWidthStyle}
`;
