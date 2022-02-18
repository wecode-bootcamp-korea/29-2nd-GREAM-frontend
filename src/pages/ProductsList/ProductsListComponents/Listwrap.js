import React from 'react';
import styled from 'styled-components';
import LeftFilter from './LeftFilter';
import RightFilter from './RightFilter';

const Listwrap = () => {
  return (
    <ListContainer>
      <LeftFilter />
      <RightFilter />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin: 0 40px 80px;
  display: flex;
`;
export default Listwrap;
