import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/ProductCard/ProductCard';
const RightFilter = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://13.124.44.115:8080/products')
      .then(res => res.json())
      .then(result => setList(result.product_list));
  }, []);

  return (
    <Right>
      <Sorting>
        <Popular>인기순✔️</Popular>
      </Sorting>
      <Products>
        {list.length > 0 &&
          list.map(({ id, author, name, price, product_image }) => {
            return (
              <Card
                key={id}
                product_image={product_image[0].image}
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
`;

const Popular = styled.button`
  padding: 0;
  background-color: #fff;
  border: none;
  font-weight: 600;
  font-size: 15px;
  float: right;
  cursor: pointer;
`;

const Products = styled.div`
  display: flex;
  width: 100%;
  object-fit: cover;
`;

export default RightFilter;
