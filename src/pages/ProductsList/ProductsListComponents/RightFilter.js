import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/ProductCard/ProductCard';
import Btn from '../../ProductDetail/Btn';

const RightFilter = ({ list, SORT_LISTS, setFilter }) => {
  return (
    <Right>
      <Sorting>
        {SORT_LISTS.map((x, idx) => {
          return (
            <SortBtn
              type="button"
              color="darkGrey"
              key={idx}
              name={Object.keys(x.sortList)}
              onClick={e => setFilter(e, x.sortType)}
              outline
            >
              {Object.values(x.sortList)}
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
