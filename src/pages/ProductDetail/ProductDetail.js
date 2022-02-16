import React, { useState, useEffect } from 'react';
import ProductDetailSlider from './ProductDetailSlider';
import styled from 'styled-components';
import FavoriteBtn from './FavoriteBtn';
import FavoriteModal from './FavoriteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const [favoriteModal, setFavoriteModal] = useState(false);
  const productSizes = productData?.size;
  const productImg = productData?.img[0];
  const productName = productData?.name;
  const productInterestedNum = productData?.totalinterestednum;

  const renderInterestedNum = productInterestedNum => {
    if (productInterestedNum >= 10000) {
      return parseFloat((productInterestedNum / 10000).toFixed(1)) + '만';
    }
    if (productInterestedNum >= 1000) {
      return productInterestedNum.toLocaleString();
    }
    if (productInterestedNum >= 0) {
      return productInterestedNum;
    }
    if (productInterestedNum === undefined) {
      return 0;
    }
    return 0;
  };

  const renderNumber = renderInterestedNum(productInterestedNum);

  const favoriteModalClick = () => {
    setFavoriteModal(true);
  };
  const onModalConfirm = e => {
    e.preventDefault();
    setFavoriteModal(false);
  };

  useEffect(() => {
    fetch('/data/Products.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  return (
    <>
      {productData === null ? (
        <h4>상품 상세페이지를 로딩중입니다.</h4>
      ) : (
        <ProductDetailSlider product={productData} />
      )}
      <FavoriteBtnWrapper>
        <HeightFavoriteBtn
          color="lightGrey"
          outline
          fullWidth
          onClick={favoriteModalClick}
        >
          <span>
            <FontAwesomeIcon icon={farBookmark} size="1x" />
          </span>
          <span>관심상품</span>
          <span>{renderNumber}</span>
        </HeightFavoriteBtn>
      </FavoriteBtnWrapper>
      <FavoriteModal
        title="관심 상품 추가"
        productName={productName}
        productImg={productImg}
        productSizes={productSizes}
        confirmText="확인"
        onConfirm={onModalConfirm}
        visible={favoriteModal}
      />
    </>
  );
};

export default ProductDetail;

const FavoriteBtnWrapper = styled.div`
  width: 560px;
  margin: 0 auto;
  margin-top: 40px;
  border: 1px solid black;
  padding: 10px;
`;

const HeightFavoriteBtn = styled(FavoriteBtn)`
  height: 60px;
  span {
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    color: ${({ theme }) => theme.palette.black};
    margin-left: 4px;
  }
`;
