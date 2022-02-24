import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Box from './ProductsListComponents/Box';
import Listwrap from './ProductsListComponents/Listwrap';
import Sliders from './ProductsListComponents/Sliders';
import FILTER_LISTS from './ProductsListComponents/DROPDOWN_LIST';
import SORT_LISTS from './ProductsListComponents/SORT_LIST';
import { LOGIN_API_URL } from '../../config';

const ProductsList = () => {
  const [list, setList] = useState([]);
  const [productFilters, setproductFilters] = useState({
    author: [],
    theme: [],
    year: [],
    price: [],
    size: [],
    sort: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const filterQuery = makeFilterQuery(productFilters);
    navigate(`/list${filterQuery}`);
  }, [navigate, productFilters]);

  const handleProductFilter = (e, filterTypeQuery) => {
    const isAlreadyFilter = productFilters[filterTypeQuery].includes(
      e.target.name
    );

    const newQuery = isAlreadyFilter
      ? productFilters[filterTypeQuery].filter(el => el !== e.target.name)
      : [...productFilters[filterTypeQuery], e.target.name];

    setproductFilters(prev => ({ ...prev, [filterTypeQuery]: newQuery }));
  };

  const makeFilterQuery = productFilters => {
    let query = '';
    for (let filterType in productFilters) {
      const filterIds = productFilters[filterType];
      if (filterIds.length > 0) {
        query += `&${filterType}=${filterIds.join(`&${filterType}=`)}`;
      }
    }

    return query.replace('&', '?');
  };

  useEffect(() => {
    fetch(`${LOGIN_API_URL}/products${location.search}`)
      .then(res => res.json())
      .then(result => {
        setList(result.product_list);
      });
  }, [location.search]);

  return (
    <Wapping>
      <Box />
      <Sliders list={list} />
      <Listwrap
        filterLists={FILTER_LISTS}
        sortLists={SORT_LISTS}
        setFilter={handleProductFilter}
        list={list}
      />
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
