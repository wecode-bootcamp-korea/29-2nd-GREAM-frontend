import React from 'react';
import styled from 'styled-components';

const ChartBtn = ({ onClickBtn }) => {
  return (
    <ChartContainer>
      <Btn onClick={() => onClickBtn('first')}>
        <span>1주</span>
      </Btn>
      <Btn onClick={() => onClickBtn('second')}>
        <span>2주</span>
      </Btn>
      <Btn onClick={() => onClickBtn('third')}>
        <span>전체</span>
      </Btn>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 600px;
  height: 45px;
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Btn = styled.button`
  width: 195px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: white;

  span {
    font-size: 12px;
  }
`;

export default ChartBtn;
