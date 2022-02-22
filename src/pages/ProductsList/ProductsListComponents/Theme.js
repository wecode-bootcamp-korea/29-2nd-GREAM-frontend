import React from 'react';
import styled from 'styled-components';
const Theme = () => {
  return (
    <>
      <FilterName>
        <Cate>테마</Cate>
        <SubCate>모든 테마</SubCate>
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
export default Theme;
