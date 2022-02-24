import React from 'react';
import styled from 'styled-components';

const SizeDrop = () => {
  return (
    <FilterName>
      <Cate />
      <SubCate>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">Small</p>
        </div>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">Medium</p>
        </div>
        <div className="check">
          <input type="radio" name="checkbox" />
          <p className="category">Large</p>
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

export default SizeDrop;
