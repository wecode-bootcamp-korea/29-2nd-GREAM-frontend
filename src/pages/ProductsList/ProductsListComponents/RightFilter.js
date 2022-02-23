import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/ProductCard/ProductCard';
import SORT_LISTBTN from './sortListBtn';
import Btn from '../../ProductDetail/Btn';

const RightFilter = () => {
  const [list, setList] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('popular');

  useEffect(() => {
    fetch('http://13.124.44.115:8080/products')
      .then(res => res.json())
      .then(result => setList(result.product_list));
  }, []);

  const sortBy = {
    popular: (a, b) => b.wishlist_count - a.wishlist_count,
    ascend: (a, b) => a.price - b.price,
    descend: (a, b) => b.price - a.price,
  };

  const sortedProducts = [...list].sort(sortBy[sortCriteria]);

  const changeSortCriteria = e => {
    setSortCriteria(e.target.name);
  };

  return (
    <Right>
      <Sorting>
        {SORT_LISTBTN.map(({ id, name }) => {
          return (
            <SortBtn
              type="button"
              color="darkGrey"
              key={id}
              name={id}
              onClick={changeSortCriteria}
              outline
            >
              {name}
            </SortBtn>
          );
        })}
      </Sorting>
      <Products>
        {sortedProducts?.length > 0 &&
          sortedProducts.map(
            ({ id, author, name, price, image, wishlist_count }) => {
              return (
                <Card
                  key={id}
                  product_image={image}
                  author={author}
                  name={name}
                  price={price}
                  id={id}
                  wishlist_count={wishlist_count}
                />
              );
            }
          )}
      </Products>
    </Right>
  );
};

const Right = styled.div`
  width: 1100px;
  color: ${({ theme }) => theme.palette.black};
`;

const Sorting = styled.div`
  height: 68px;
  padding: 23px 0 15px;
`;

const SortBtn = styled(Btn)`
  padding: 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
  float: right;
  margin-left: 30px;
  color: ${({ theme }) => theme.palette.grey};
  height: 20px;
  padding: 3px;
  border: 0;
  :hover {
    color: ${({ theme }) => theme.palette.black};
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default RightFilter;
