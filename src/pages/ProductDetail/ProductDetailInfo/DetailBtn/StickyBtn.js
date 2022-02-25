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
    width: '100px',
    height: '100px',
    borderRadius: '20px',
  };

  const margin = {
    marginRight: '10px',
    marginTop: '-4px',
  };

  function numberWithCommas(x) {
    const convertPrice = (
      Math.floor(parseInt(x) / 1000) * 1000
    ).toLocaleString();
    return convertPrice + '원';
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
            <Name>
              <p>작가명 : {productData?.author}</p>
              <span>작품명 : {productData?.name}</span>
            </Name>
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
  height: 200px;
`;

const InBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontsize.fontSize4};
  margin: 10px 10px;
  p {
    padding: 4px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.black};
  }
  span {
    padding: 4px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.black};
  }
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
