import React from 'react';
import styled from 'styled-components';
import LeftFilter from './LeftFilter';
import RightFilter from './RightFilter';

const Listwrap = ({ filterLists, setFilter, list, sortLists }) => {
  return (
    <ListContainer>
      <LeftFilter filterLists={filterLists} setFilter={setFilter} />
      <RightFilter list={list} sortLists={sortLists} setFilter={setFilter} />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
`;

export default Listwrap;
