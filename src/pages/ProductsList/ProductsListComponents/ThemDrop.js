import React from 'react';
import styled from 'styled-components';

const ThemDrop = () => {
  return (
    <FilterName>
      <Cate />
      <SubCate>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">추상</p>
        </div>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">구상</p>
        </div>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">팝아트</p>
        </div>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">입체주의</p>
        </div>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">동양미술</p>
        </div>
      </SubCate>
    </FilterName>
  );
};

const FilterName = styled.div`
  display: block;
`;

const Cate = styled.span`
  display: block;
  margin-bottom: 15px;
`;

const SubCate = styled.span`
  color: ${props => props.theme.greyColor};
  .check {
    display: flex;
  }
  .category {
    margin-left: 10px;
  }
`;

export default ThemDrop;
