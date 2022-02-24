import React from 'react';
import styled from 'styled-components';

const ChartBtn = ({ onClickBtn, A }) => {
  return (
    <ChartContainer>
      <BtnBox>
        <Btn onClick={() => onClickBtn('first', 0)} id="1" active={1 === A}>
          <span>1주</span>
        </Btn>
        <Btn onClick={() => onClickBtn('second', 1)} id="2" active={2 === A}>
          <span>2주</span>
        </Btn>
        <Btn onClick={() => onClickBtn('third', 2)} id="3" active={3 === A}>
          <span>전체</span>
        </Btn>
      </BtnBox>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 563px;
  height: 45px;
  background-color: #f4f4f4;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
`;

const Btn = styled.button`
  flex: 1 0 20%;
  height: 35px;
  border: none;
  border-radius: 8px;
  margin: 2px;
  padding: 4px;
  :nth-child(1) {
    background-color: ${props => (props.active ? 'white' : 'transparent')};
  }
  background-color: ${props => (props.active ? 'white' : 'transparent')};
  span {
    color: ${props => (props.active ? '#222222' : '#222222CC')};
    font-size: 12px;
  }
`;

export default ChartBtn;
