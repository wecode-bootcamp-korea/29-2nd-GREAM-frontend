import React from 'react';
import styled from 'styled-components';

const Box = () => {
  return (
    <BOX>
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
  margin-left: 0;
`;
const Button = styled.button`
  background: ${props => props.theme.palette.green};
  margin-top: 15px;
  padding: 8px;
  margin-left: 20px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  color: ${props => props.theme.palette.white};
  cursor: pointer;

  :nth-child(1) {
    margin-left: 0;
  }

  :nth-child(2) {
    background: ${props => props.theme.palette.red};
  }

  :nth-child(3) {
    background: ${props => props.theme.palette.blue};
  }

  :nth-child(4) {
    background: ${props => props.theme.palette.grey};
  }

  :nth-child(5) {
    background: ${props => props.theme.palette.black};
  }
`;

export default Box;
