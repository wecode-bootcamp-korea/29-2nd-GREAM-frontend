import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Card = ({ product_image, author, name, price, id, wishlist_count }) => {
  const changePriceString = price => {
    const convertPrice = (
      Math.floor(parseInt(price) / 1000) * 1000
    ).toLocaleString();
    return convertPrice + '원';
  };

  return (
    <ProductCard>
      <ProductLink to={`/product/${id}`}>
        <Picture src={product_image} alt="제품이미지" />
        <Product>
          <AuthorNameBox>
            <ProductName>{author}</ProductName>
          </AuthorNameBox>
          <NameBox>
            <p>{name}</p>
          </NameBox>
        </Product>
        <Price>
          <span>{changePriceString(price)}</span>
          <ImmediateSale>즉시구매가</ImmediateSale>
        </Price>
        <LikeCount>
          <Count>
            <FontAwesomeIcon icon={faBookmark} />
            <span>{wishlist_count}</span>
          </Count>
          <Count>
            <span>⏍</span>
            <span>{wishlist_count}</span>
          </Count>
        </LikeCount>
      </ProductLink>
    </ProductCard>
  );
};

const ProductCard = styled.div`
  width: 250px;
  margin: 0 12.5px 20px 12.5px;
  border-radius: 12px;
  color: ${({ theme }) => theme.palette.black};
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const AuthorNameBox = styled.div`
  margin-top: 2px;
`;

const NameBox = styled.div`
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
  color: ${({ theme }) => theme.palette.darkGrey};
`;
const Picture = styled.img`
  width: 100%;
  padding: 7px;
  border-radius: 20px;
  object-fit: cover;
`;

const Product = styled.div`
  margin-left: 5px;
`;

const ProductName = styled.p`
  font-weight: bold;
  margin-bottom: 2x;
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
`;

const Price = styled.div`
  margin-top: 11px;
  margin-left: 5px;
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  font-weight: 600;
`;

const ImmediateSale = styled.div`
  margin-top: 2px;
  color: ${({ theme }) => theme.palette.grey};
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
`;

const LikeCount = styled.div`
  margin: 10px 0 10px 5px;
`;

const Count = styled.span`
  margin: 0 20px 0 0;
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  span {
    padding-left: 10px;
  }

  span:nth-child(1) {
    padding-left: 0px;
    font-size: ${({ theme }) => theme.fontsize.fontSize4};
  }
`;

export default Card;
