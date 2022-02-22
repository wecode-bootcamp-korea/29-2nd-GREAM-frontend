import React from 'react';
import styled from 'styled-components';

const AuthorDrop = () => {
  return (
    <FilterName>
      <Cate />
      <SubCate>
        <div className="check">
          <input type="checkbox" />
          <p className="category">작가 1</p>
        </div>
        <div className="check">
          <input type="checkbox" />
          <p className="category">작가 2</p>
        </div>
        <div className="check">
          <input type="checkbox" />
          <p className="category">작가 3</p>
        </div>
        <div className="check">
          <input type="checkbox" />
          <p className="category">작가 4</p>
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

export default AuthorDrop;
