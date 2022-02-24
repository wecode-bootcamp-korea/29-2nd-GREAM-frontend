import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const SearchBar = () => {
  const [isMainScroll, setIsMainScroll] = useState(true);

  const listenScrollEvent = () => {
    window.scrollY > 200 ? setIsMainScroll(true) : setIsMainScroll(false);
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

  return (
    <div>
      {isMainScroll && (
        <Banner>
          <InBox>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tzEhvBhM6gLpVcCuokwKqoI-B-WWVdrH6g&usqp=CAU"
              style={styledImg}
              alt="img"
            />
            <Name>vincent van gogh</Name>
          </InBox>
          <ButtonBox>
            <StyledButton>
              <span style={margin}>구매</span>
              <div style={margin}>260,000원</div>
            </StyledButton>
            <StyledButton sell>
              <span style={margin}>구매</span>
              <div style={margin}>260,000원</div>
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
  top: 99px;
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
