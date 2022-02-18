import React from 'react';
import styled from 'styled-components';

const Author = () => {
  return (
    <Modal>
      <FilterTitle>
        <FilterName>
          <Cate>작가</Cate>
          <div className="check">
            <input type="checkbox" />
            <p>작가1</p>
          </div>
          <div className="check">
            <input type="checkbox" />
            <p>작가2</p>
          </div>
          <div className="check">
            <input type="checkbox" />
            <p>작가3</p>
          </div>
          <div className="check">
            <input type="checkbox" />
            <p>작가4</p>
          </div>
        </FilterName>
        <div>➖</div>
      </FilterTitle>
    </Modal>
  );
};

const Modal = styled.div`
  width: 20%;
  margin: 0 10px 0 40;
  padding: 0 10px 0 0;
  background-color: orange;
`;

const FilterTitle = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const FilterName = styled.div`
  display: block;
  .check {
    display: flex;
    .checkbox {
      height: 100%;
    }
  }
`;
const Cate = styled.span`
  display: block;
  margin-bottom: 15px;
`;

export default Author;
