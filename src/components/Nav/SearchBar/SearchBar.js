import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { flexAlignCenter } from '../../../styles/mixin';

const SearchBar = ({ searchBarState, closeSearchBar }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultList, setSearchResultList] = useState([]);
  const navigate = useNavigate();

  const isTyped = searchKeyword.length > 0;
  const deleteAll = () => {
    setSearchKeyword('');
  };

  useEffect(() => {
    fetch('http://15.164.48.155:8000/products/search', {
      method: 'POST',
      body: JSON.stringify({ keyword: searchKeyword }),
    })
      .then(res => res.json())
      .then(res => {
        setSearchResult(res.product_list);
        setSearchResultList(res.product_num);
      });
  }, [searchKeyword]);

  if (!searchBarState) return null;
  else {
    return (
      <>
        <Overlay onClick={closeSearchBar} />
        <SearchWrapper
          onKeyUp={e => {
            if (e.key === 'Escape') {
              return closeSearchBar();
            }
          }}
        >
          <SearchArea>
            <SearchBox>
              <Icon>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Icon>
              <Input
                type="text"
                placeholder="type the name of product you wanna find"
                value={searchKeyword}
                onChange={e => setSearchKeyword(e.target.value)}
                onKeyUp={e => {
                  if (e.key === 'Enter') {
                    navigate(`/list?keyword=${searchKeyword}`);
                    closeSearchBar();
                    deleteAll();
                  }
                }}
              />
              {isTyped && <DeleteBtn onClick={deleteAll}>X</DeleteBtn>}
            </SearchBox>
            <button onClick={closeSearchBar}>close</button>
          </SearchArea>
          {isTyped && (
            <SearchedData>
              <SearchKeyword>{searchKeyword}</SearchKeyword>
              <SearchResultList
                onClick={() => {
                  navigate(`/list?keyword=${searchKeyword}`);
                  closeSearchBar();
                  deleteAll();
                }}
              >
                {searchResultList} {`>`}
              </SearchResultList>
            </SearchedData>
          )}
          {isTyped &&
            searchResult.length > 0 &&
            searchResult.map(content => (
              <ProductList
                key={content.id}
                onClick={() => {
                  navigate(`/detail/${content.id}`);
                  closeSearchBar();
                  deleteAll();
                }}
              >
                <img alt="thumbnail img" src={content.img_url} />
                <span>{content.name}</span>
              </ProductList>
            ))}
        </SearchWrapper>
      </>
    );
  }
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.black};
  opacity: 0.6;
  z-index: 99;
`;

const SearchWrapper = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 5vw;
  width: 100%;
  background-color: white;
  z-index: 200;
`;

const SearchArea = styled.div`
  ${flexAlignCenter}
  z-index: 300;

  button {
    margin-left: 1vw;
    margin-right: -2.5vw;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.palette.black};
    font-size: 1vw;
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  ${flexAlignCenter}
  padding: 1vw;
  width: 70vw;
  background-color: #f6f3f3;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius2};
`;

const Icon = styled.span`
  margin-left: 1vw;
  margin-right: -2.5vw;
  padding-top: 0.4vh;
  color: ${({ theme }) => theme.palette.grey};
  font-size: 1.4vw;
`;

const Input = styled.input`
  width: 100%;
  margin-left: 3vw;
  background-color: transparent;
  border: none;
  font-size: 1vw;

  :focus {
    outline: none;
  }
`;

const DeleteBtn = styled.span`
  margin-right: 1vw;
  padding-top: 0.5vh;
  color: ${({ theme }) => theme.palette.black};
  font-size: 1vw;
`;

const SearchedData = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  width: 68vw;
  margin: 2vw 0vw 2vw 0vw;
  margin-left: -3vw;
  padding: 0 1vw 1vw 1vw;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGrey};
  color: ${({ theme }) => theme.palette.black};
  font-size: 1vw;
`;

const SearchKeyword = styled.span`
  font-weight: bold;
`;

const SearchResultList = styled.span`
  cursor: pointer;
`;

const ProductList = styled.div`
  ${flexAlignCenter}
  width: 68vw;
  padding: 0.8vw;
  margin-left: -3vw;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGrey};
  cursor: pointer;

  img {
    width: 5%;
    border-radius: ${({ theme }) => theme.btnRadius.btnRadius3};
  }

  span {
    margin-left: 2vw;
    font-size: 1vw;
  }
`;

export default SearchBar;
