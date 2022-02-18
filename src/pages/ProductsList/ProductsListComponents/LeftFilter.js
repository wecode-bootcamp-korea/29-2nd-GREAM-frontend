import React, { useState } from 'react';
import styled from 'styled-components';
import FILTER_LIST from './FILTER_LIST';
import Author from './Author';

const LeftFilter = () => {
  const [infoFilter, setInfoFilter] = useState(false);

  const toggleMenu = () => {
    setInfoFilter(!infoFilter);
  };
  return (
    <Left>
      <Filter>
        <SpanFilter>필터</SpanFilter>
      </Filter>
      {FILTER_LIST.map(list => {
        return (
          <FilterTitle key={list.id} onClick={toggleMenu}>
            {infoFilter ? <Author /> : null}
            <FilterName>
              <Cate>{list.desc}</Cate>
              <SubCate>{list.subDesc}</SubCate>
            </FilterName>
            <div>➕</div>
          </FilterTitle>
        );
      })}
    </Left>
  );
};

const Left = styled.div`
  width: 20%;
  margin: 0 10px 0 0;
  padding: 0 10px 0 0;
`;
const Filter = styled.div`
  padding: 23px 0 15px;
`;

const SpanFilter = styled.span`
  font-weight: bold;
`;

const FilterTitle = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const FilterName = styled.div`
  display: block;
`;

const Cate = styled.span`
  display: block;
  margin-bottom: 15px;
`;

const SubCate = styled.span`
  color: ${props => props.theme.greyColor};
`;
export default LeftFilter;
