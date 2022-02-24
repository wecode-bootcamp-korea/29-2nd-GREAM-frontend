import React from 'react';
import styled from 'styled-components';
import DropBox from './DropBox';

const LeftFilter = ({ filterLists, setFilter }) => {
  return (
    <Left>
      <Filter>
        <SpanFilter>필터</SpanFilter>
      </Filter>
      {filterLists.map((filterData, idx) => {
        return (
          <DropBox key={idx} filterData={filterData} setFilter={setFilter} />
        );
      })}
    </Left>
  );
};

const Left = styled.div`
  width: 180px;
  margin-right: 20px;
  padding: 0;
  color: ${({ theme }) => theme.palette.black};
`;

const Filter = styled.div`
  padding: 32px 0 15px;
  width: 100%;
`;

const SpanFilter = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export default LeftFilter;
