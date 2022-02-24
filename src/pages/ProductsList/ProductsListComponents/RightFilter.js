import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/ProductCard/ProductCard';
import SORT_LISTBTN from './SORT_LISTBTN';
import SortBtn from './SortBtn';

const RightFilter = ({ sorted, changeSort }) => {
  return (
    <Right>
      <Sorting>
        {/* {SORT_LISTBTN.map(({ id, name }) => {
          return (
            <SortBtn type="button" key={id} name={name} onClick={changeSort}>
              {name}
            </SortBtn>
          );
        })} */}
      </Sorting>
      <Products>
        {sorted.length > 0 &&
          sorted.map(({ id, author, name, price, image }) => {
            return (
              <Card
                key={id}
                product_image={image}
                author={author}
                name={name}
                price={price}
              />
            );
          })}
      </Products>
    </Right>
  );
};

const Right = styled.div`
  width: 100%;
`;

const Sorting = styled.div`
  height: 68px;
  padding: 23px 0 15px;
  display: flex;
`;
const Products = styled.div`
  display: flex;
  width: 100%;
  object-fit: cover;
`;
export default RightFilter;
