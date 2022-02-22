import React from 'react';
import styled from 'styled-components';
const Price = () => {
  return (
    <>
      <FilterName>
        <Cate>가격</Cate>
        <SubCate>모든 가격</SubCate>
      </FilterName>
      <div>➕</div>
    </>
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
  color: ${props => props.theme.palette.grey};
  .check {
    display: flex;
  }
  .category {
    margin-left: 10px;
  }
`;

export default Price;
