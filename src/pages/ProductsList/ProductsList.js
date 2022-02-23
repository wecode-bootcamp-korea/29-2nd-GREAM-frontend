import React from 'react';
import styled from 'styled-components';
import Box from './ProductsListComponents/Box';
import Listwrap from './ProductsListComponents/Listwrap';
import Sliders from './ProductsListComponents/Sliders';

const ProductsList = () => {
  return (
    <Wapping>
      <Box />
      <Sliders />
      <Listwrap />
    </Wapping>
  );
};

const Wapping = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: ${props => props.Global};
`;
export default ProductsList;
