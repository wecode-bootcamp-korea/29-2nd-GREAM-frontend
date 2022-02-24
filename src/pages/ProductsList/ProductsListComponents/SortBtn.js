import React from 'react';
import styled from 'styled-components';

const SortBtn = ({ children, ...rest }) => {
  return <Sort {...rest}>{children}</Sort>;
};

const Sort = styled.button`
  width: 100px;
  height: 30px;
`;

export default SortBtn;
