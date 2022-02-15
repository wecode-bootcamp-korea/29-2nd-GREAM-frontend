import React, { useState, useEffect } from 'react';
import ProductDetailSlider from './ProductDetailSlider';
import styled from 'styled-components';
import Btn from './Btn';
import FavoriteModal from './FavoriteModal';
import MarketPriceModal from './MarketPriceModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import BASE_URL from '../config';
import SIZE_INFO from './sizeInfo';

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const [isToggle, setIsToggle] = useState({
    favoriteModalBtn: false,
    marketPriceBtn: false,
  });

  const [isClickBtn, setIsClickBtn] = useState({
    Small: false,
    Medium: false,
    Large: false,
  });

  const { id } = useParams();
  const productImg = productData?.images?.[0];
  const productName = productData?.name;
  const productId = productData?.product_id;
  const productInterestedNum = productData?.wishlist.length;

  localStorage.setItem(productId, JSON.stringify(isClickBtn));
  const savedBookMark = JSON.parse(localStorage.getItem(productId));
  const isCheckedBookMark = Object.values(savedBookMark).indexOf(true);

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

  const clickToggle = e => {
    if (sessionStorage.getItem('token')) {
      const selectedModalBtn = e.currentTarget.getAttribute('name');
      setIsToggle(prev => {
        return {
          ...prev,
          [selectedModalBtn]: !prev[selectedModalBtn],
        };
      });
    } else {
      alert('로그인 해주세요');
    }
  };

  const onModalConfirm = e => {
    e.preventDefault();
    setIsToggle(!isToggle);
    fetch(`${BASE_URL}products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  };

  useEffect(() => {
    fetch(`${BASE_URL}products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, [id]);

  const btnClick = e => {
    e.preventDefault();
    const selectedBtn = e.currentTarget.getAttribute('name');
    const selectedSize = e.currentTarget.getAttribute('value');

    setIsClickBtn(prev => {
      return {
        ...prev,
        [selectedBtn]: !prev[selectedBtn],
      };
    });

    fetch(`${BASE_URL}products/follow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({
        user_id: 2,
        product_id: Number(productId),
        size_id: Number(selectedSize),
      }),
    }).then(res => res.json());
  };

  const ModalListObj = {
    favoriteModal: (
      <FavoriteModal
        title="관심 상품 추가"
        confirmText="확인"
        productName={productName}
        productImg={productImg}
        productSizes={SIZE_INFO}
        productId={productId}
        onConfirm={onModalConfirm}
        btnClick={btnClick}
        isClickBtn={isClickBtn}
      />
    ),
    marketPriceModal: (
      <MarketPriceModal
        title="시세"
        productName={productName}
        productImg={productImg}
        productSizes={SIZE_INFO}
        productId={productId}
        onConfirm={onModalConfirm}
      />
    ),
  };

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
          onClick={clickToggle}
          name="favoriteModalBtn"
        >
          {isCheckedBookMark !== -1 ? (
            <span>
              <FontAwesomeIcon icon={fasBookmark} size="1x" />
            </span>
          ) : (
            <span>
              <FontAwesomeIcon icon={farBookmark} size="1x" />
            </span>
          )}
          <span>관심상품</span>
          <span>{renderNumber}</span>
        </HeightFavoriteBtn>
      </FavoriteBtnWrapper>
      {isToggle.favoriteModalBtn && ModalListObj.favoriteModal}
      {/* {isToggle.marketPriceBtn && ModalListObj[2]}
      <FavoriteBtnWrapper>
        <HeightFavoriteBtn
          color="lightGrey"
          outline
          fullWidth
          onClick={clickToggle}
          name="marketPriceBtn"
        >
          <>
            <span>
              <FontAwesomeIcon icon={farBookmark} size="1x" />
            </span>
            <span>체결 내역 더보기</span>
          </>
        </HeightFavoriteBtn>
      </FavoriteBtnWrapper> */}
    </>
  );
};

export default ProductDetail;

const FavoriteBtnWrapper = styled.div`
  width: 560px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 10px;
`;

const HeightFavoriteBtn = styled(Btn)`
  height: 60px;
  span {
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    color: ${({ theme }) => theme.palette.black};
    margin-left: 4px;
  }
`;
