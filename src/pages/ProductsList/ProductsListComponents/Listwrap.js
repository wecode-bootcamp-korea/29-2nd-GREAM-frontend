import React from 'react';
import styled from 'styled-components';
import LeftFilter from './LeftFilter';
import RightFilter from './RightFilter';

const Listwrap = ({ FILTER_LISTS, setFilter, list, SORT_LISTS }) => {
  return (
    <ListContainer>
      <LeftFilter FILTER_LISTS={FILTER_LISTS} setFilter={setFilter} />
      <RightFilter list={list} SORT_LISTS={SORT_LISTS} setFilter={setFilter} />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
`;

export default Listwrap;
