import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  const styledImg = {
    width: '60px',
    height: '60px',
    borderRadius: '10px',
  };
  return (
    <Banner>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tzEhvBhM6gLpVcCuokwKqoI-B-WWVdrH6g&usqp=CAU"
        style={styledImg}
        alt="img"
      />
    </Banner>
    <Banner>hello</Banner>
  );
};

const Banner = styled.div`
  position: fixed;
  top: 99px;
  width: 100vw;
  padding: 10px 40px 15px;
  background-color: white;
  box-shadow: 4px 0 10px 0 rgb(0 0 0 / 10%);
  z-index: 1;
`;

export default SearchBar;
