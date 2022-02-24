import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/ProductCard/ProductCard';
import Btn from '../../ProductDetail/Btn';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const RightFilter = ({ list, sortLists, setFilter }) => {
  const [changeBtn, setChangeCriteriaBtn] = useState({
    '-realse-price': '-realease_price',
    release_price: 'realase',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const changeSortBtn = e => {
    setChangeCriteriaBtn(prev => {
      return {
        ...prev,
        [e.target.name]: !prev[e.target.name],
      };
    });
  };

  const addSortQuery = e => {
    const sortQuery = e.target.name;
    const sortQueryString = `?sort=${sortQuery}`;
    const sortQueryString2 = `&sort=${sortQuery}`;

    if (location.search.length === 0) {
      navigate((location.search += sortQueryString));
    } else {
      navigate((location.search += sortQueryString2));
    }
  };

  return (
    <Right>
      <Sorting>
        {sortLists.map((x, idx) => {
          return (
            <SortBtn
              type="button"
              color="darkGrey"
              key={idx}
              name={Object.keys(x.sortList)}
              onClick={e => setFilter(e, x.sortType)}
              outline
            >
              {Object.values(x.sortList).join()}
            </SortBtn>
          );
        })}
      </Sorting>
      <Products>
        {list?.length > 0 &&
          list.map(({ id, author, name, price, image, wishlist_count }) => {
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
          })}
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
