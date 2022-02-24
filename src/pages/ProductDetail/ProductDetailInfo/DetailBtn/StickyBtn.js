import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const SearchBar = ({ productData, sizeBox }) => {
  const [isMainScroll, setIsMainScroll] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 300 ? setIsMainScroll(true) : setIsMainScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const styledImg = {
    width: '60px',
    height: '60px',
    borderRadius: '10px',
  };

  const margin = {
    marginRight: '10px',
    marginTop: '-4px',
  };

  function numberWithCommas(x) {
    const a = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return a;
  }

  return (
    <div>
      {isMainScroll && (
        <Banner>
          <InBox>
            <img
              src={productData?.images?.[0]?.url}
              style={styledImg}
              alt="img"
            />
            <Name>{productData?.name}</Name>
          </InBox>
          <ButtonBox>
            <StyledButton>
              <span style={margin}>구매</span>
              <div style={margin}>
                {numberWithCommas(
                  Math.floor(sizeBox?.buyer_size_price?.[0].price)
                )}
              </div>
            </StyledButton>
            <StyledButton sell>
              <span style={margin}>판매</span>
              <div style={margin}>
                {numberWithCommas(
                  Math.floor(sizeBox?.seller_size_price?.[0].price)
                )}
              </div>
            </StyledButton>
          </ButtonBox>
        </Banner>
      )}
    </div>
  );
};

const Banner = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0px;
  width: 100vw;
  padding: 10px 40px 15px;
  background-color: white;
  box-shadow: 4px 0 10px 0 rgb(0 0 0 / 10%);
  z-index: 1;
`;

const InBox = styled.div`
  display: flex;
  width: 100%;
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
  margin: 5px 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  margin-left: 10px;
`;

export default SearchBar;
