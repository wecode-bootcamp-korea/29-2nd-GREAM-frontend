import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Card = ({ product_image, author, name, price }) => {
  return (
    <ProductCard>
      <ProductLink to="#">
        <Picture src={product_image} alt="제품이미지" />
        <Product>
          <ProductNmae>{author}</ProductNmae>
          <p>{name}</p>
        </Product>
        <Price>
          <span>
            {price}
            <span>원</span>
          </span>
          <ImmediateSale>즉시구매가</ImmediateSale>
        </Price>
        <LikeCount>
          <FontAwesomeIcon icon="fa-light fa-bookmark" />
          <Count>4.5만</Count>
          <span>⏍</span>
          <Count>4.5만</Count>
        </LikeCount>
      </ProductLink>
    </ProductCard>
  );
};

const ProductCard = styled.div`
  width: 22.9%;
  margin: 20px 10px;
  border: 1px solid ${props => props.theme.greyColor};
  border-radius: 12px;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Picture = styled.img`
  width: 100%;
  padding: 10px;
  border-radius: 12px;
`;

const Product = styled.div`
  margin-top: 30px;
  margin-left: 5px;
`;

const ProductNmae = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Price = styled.div`
  margin-top: 20px;
  margin-left: 5px;
`;

const ImmediateSale = styled.div`
  color: ${props => props.theme.greyColor};
`;

const LikeCount = styled.div`
  margin: 10px 0 0 5px;
`;

const Count = styled.span`
  margin: 0 20px 0 10px;
  font-size: 15px;
`;

export default Card;
