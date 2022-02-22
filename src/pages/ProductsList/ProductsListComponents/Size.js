import React from 'react';
import styled from 'styled-components';

const Size = () => {
  return (
    <>
      <FilterName>
        <Cate>사이즈</Cate>
        <SubCate>모든 사이즈</SubCate>
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
export default Size;
