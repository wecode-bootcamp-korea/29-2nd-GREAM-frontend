import React from 'react';
import styled from 'styled-components';

const Box = () => {
  return (
    <BOX>
      <Button>*</Button>
      <Button>인물</Button>
      <Button>대중문화</Button>
      <Button>자연</Button>
      <Button>도시</Button>
      <Button>일상</Button>
    </BOX>
  );
};

const BOX = styled.div`
  margin: 15px;
`;
const Button = styled.button`
  background-color: ${props => props.theme.greyColor};
  margin-top: 15px;
  padding: 8px;
  margin-left: 8px;
  border-radius: 12px;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

export default Box;
