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
import DROPDOWN_LIST from './DROPDOWN_LIST';

const LeftFilter = () => {
  const [hiFilter, setHiFilter] = useState(false);
  const [theme, setTheme] = useState(false);
  const [size, setSize] = useState(false);
  const [exhibit, setExhibit] = useState(false);
  const [price, setPrice] = useState(false);

  const [handleFilterToggle, setHandleFilterToggle] = useState(DROPDOWN_LIST);

  const clickFilterToggle = e => {
    const selectedModalBtn = e.currentTarget.getAttribute('name');
    setHandleFilterToggle(prev => {
      return {
        ...prev,
        [selectedModalBtn]: !prev[selectedModalBtn],
      };
    });
  };

  const AuthorToggle = () => {
    setHiFilter(!hiFilter);
  };

  const themeToggle = () => {
    setTheme(!theme);
  };

  const sizeToggle = e => {
    setSize(!size);
    e.stopPropagation();
  };

  const exhibitToggle = () => {
    setExhibit(!exhibit);
  };

  const priceToggle = () => {
    setPrice(!price);
  };

  return (
    <Left>
      <Filter>
        <SpanFilter>필터</SpanFilter>
      </Filter>
      <>
        <FilterTitle onClick={clickFilterToggle}>
          <Author />
        </FilterTitle>
        {handleFilterToggle[size.name] ? <AuthorDrop /> : null}

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
  width: 180px;
  margin-right: 20px;
  padding: 0;
  color: ${({ theme }) => theme.palette.black};
`;
const Filter = styled.div`
  padding: 23px 0 15px;
`;

const SpanFilter = styled.span`
  font-weight: bold;
`;

const FilterTitle = styled.button`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export default LeftFilter;
