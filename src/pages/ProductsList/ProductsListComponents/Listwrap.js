import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftFilter from './LeftFilter';
import RightFilter from './RightFilter';

const Listwrap = () => {
  const [list, setList] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch('http://13.124.44.115:8080/products')
      .then(res => res.json())
      .then(result => {
        setList(result.product_list);
      });
  }, []);

  const sortBy = {
    인기순: (a, b) => b.wishlist_count - a.wishlist_count,
    높은가격: (a, b) => b.price - a.price,
    낮은가격: (a, b) => a.price - b.price,
  };

  const sorted = [...list].sort(sortBy[sort]);

  const changeSort = e => {
    setSort(e.target.name);
  };
  return (
    <ListContainer>
      <LeftFilter setList={setList} />
      <RightFilter
        list={list}
        setList={setList}
        sort={setSort}
        sortBy={sortBy}
        sorted={sorted}
        changeSort={changeSort}
      />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin: 0 40px 80px;
  display: flex;
`;
export default Listwrap;
