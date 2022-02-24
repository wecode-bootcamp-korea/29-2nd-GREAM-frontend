import React, { useState } from 'react';
import styled from 'styled-components';
import Author from './Author';
import AuthorDrop from './AuthorDrop';
import Size from './Size';
import ThemDrop from './ThemDrop';
import Theme from './Theme';
import SizeDrop from './SizeDrop';
import Exhibit from './Exhibit';
import ExhibitDrop from './ExhibitDrop ';
import Price from './Price';
import PriceDrop from './PriceDrop';

const LeftFilter = ({ setList }) => {
  const [hiFilter, setHiFilter] = useState(false);
  const [theme, setTheme] = useState(false);
  const [size, setSize] = useState(false);
  const [exhibit, setExhibit] = useState(false);
  const [price, setPrice] = useState(false);
  const AuthorToggle = () => {
    setHiFilter(!hiFilter);
  };

  const themeToggle = () => {
    setTheme(!theme);
  };

  const sizeToggle = e => {
    setSize(!size);
  };

  const exhibitToggle = () => {
    setExhibit(!exhibit);
  };

  const priceToggle = () => {
    setPrice(!price);
  };

  const handleInput = id => {
    fetch(`http://13.124.44.115:8080/products?author=${id}`)
      .then(res => res.json())
      .then(result => {
        setList(result.product_list);
      });
  };

  return (
    <Left>
      <Filter>
        <SpanFilter>필터</SpanFilter>
      </Filter>
      <>
        <FilterTitle onClick={AuthorToggle}>
          <Author />
        </FilterTitle>
        {hiFilter ? <AuthorDrop handleInput={handleInput} /> : null}

        <FilterTitle onClick={themeToggle}>
          <Theme />
        </FilterTitle>
        {theme ? <ThemDrop /> : null}

        <FilterTitle onClick={sizeToggle}>
          <Size />
        </FilterTitle>
        {size ? <SizeDrop /> : null}

        <FilterTitle onClick={exhibitToggle}>
          {exhibit ? <ExhibitDrop /> : <Exhibit />}
        </FilterTitle>

        <FilterTitle onClick={priceToggle}>
          {price ? <PriceDrop /> : <Price />}
        </FilterTitle>
      </>
    </Left>
  );
};

const Left = styled.div`
  width: 20%;
  margin: 0 10px 0 0;
  padding: 0 10px 0 0;
`;
const Filter = styled.div`
  padding: 23px 0 15px;
`;

const SpanFilter = styled.span`
  font-weight: bold;
`;

const FilterTitle = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export default LeftFilter;
