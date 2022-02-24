import React, { useState, useEffect } from 'react';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import ProductDetailSlider from './ProductDetailSlider';
import styled from 'styled-components';
import Btn from './Btn';
import FavoriteModal from './FavoriteModal';
import MarketPriceModal from './MarketPriceModal';
import { useParams } from 'react-router-dom';
import BASE_URL from '../config';
import SIZE_INFO from './sizeInfo';
import BuyInfo from './BuyInfo';
import MarketPrice from './MarketPrice';
import StickyBtnBox from './ProductDetailInfo/DetailBtn/StickyBtnBox';
import Login from '../../components/Nav/Login/Login';

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const [biddingData, setBiddingData] = useState(null);
  const [isToggle, setIsToggle] = useState({
    favoriteModalBtn: false,
    marketPriceBtn: false,
    login: false,
  });
  const [isClickBtn, setIsClickBtn] = useState({
    Small: false,
    Medium: false,
    Large: false,
  });

  const [handleSize, setHandleSize] = useState(0);
  const [modalTabId, setModalTabId] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`${BASE_URL}products/${id}/order`)
      .then(res => res.json())
      .then(data => setBiddingData(data.orders));
  }, [id]);

  const productImg = productData?.images?.[0];
  const productName = productData?.name;
  const productId = productData?.product_id;
  const productAuthor = productData?.author;
  const productInterestedNum = productData?.wishlist.length;
  const isModalOpen = isToggle.marketPriceBtn === true;
  sessionStorage.setItem(productId, JSON.stringify(isClickBtn));
  const savedBookMark = JSON.parse(sessionStorage.getItem(productId));
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

  const [loginModalState, setLoginModalState] = useState(false);
  const closeLoginModal = () => setLoginModalState(false);

  const clickToggle = e => {
    if (sessionStorage.getItem('JWT')) {
      const selectedModalBtn = e.currentTarget.getAttribute('name');
      setIsToggle(prev => {
        return {
          ...prev,
          [selectedModalBtn]: !prev[selectedModalBtn],
        };
      });
    } else {
      setLoginModalState(prev => prev || true);
      setIsToggle(prev => ({ ...prev, login: true }));
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

  const [sizeBox, setSizeBox] = useState([]);

  useEffect(() => {
    fetch(`http://15.164.48.155:8000/products/size-price/1`)
      .then(res => res.json())
      .then(data => {
        setSizeBox(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://15.164.48.155:8000/products/${id}`)
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
        Authorization: sessionStorage.getItem('JWT'),
      },
      body: JSON.stringify({
        user_id: 501,
        product_id: Number(productId),
        size_id: Number(selectedSize),
      }),
    }).then(res => res.json());
  };

  const getModalTabIdState = id => {
    setModalTabId(id);
  };

  const changeTable = id => {
    getModalTabIdState(id);
  };

  const handleMarketPriceBtn = e => {
    if (e.name === 'All') {
      fetch(`${BASE_URL}products/${id}/order`)
        .then(res => res.json())
        .then(data => {
          setBiddingData(data.orders);
        });
      setHandleSize(e.name);
    } else {
      fetch(`${BASE_URL}products/${id}/order?size=${e.id}`)
        .then(res => res.json())
        .then(data => {
          setBiddingData(data.orders);
        });
      setHandleSize(e.name);
    }
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
        productAuthor={productAuthor}
        productName={productName}
        productImg={productImg}
        buttonTitle={BUTTONTITLE}
        biddingData={biddingData}
        setBiddingData={setBiddingData}
        onConfirm={onModalConfirm}
        modalTabId={modalTabId}
        changeTable={changeTable}
        isModalOpen={isModalOpen}
        handleMarketPriceBtn={handleMarketPriceBtn}
        handleSize={handleSize}
      />
    ),
    Login: (
      <Login
        loginModalState={loginModalState}
        closeLoginModal={closeLoginModal}
      />
    ),
  };
  return (
    <Main>
      <StickyBtnBox productData={productData} sizeBox={sizeBox} />
      <Login
        loginModalState={loginModalState}
        closeLoginModal={closeLoginModal}
      />
      <MainContent>
        {productData && (
          <SliderWrapper>
            <ProductDetailSlider product={productData} />
          </SliderWrapper>
        )}
        <InfoWrraper>
          <ProductDetailInfo
            productData={productData}
            setProductData={setProductData}
            clickToggle={clickToggle}
            isCheckedBookMark={isCheckedBookMark}
            renderNumber={renderNumber}
            sizeBox={sizeBox}
            setSizeBox={setSizeBox}
          />
          <MarketPrice
            buttonTitle={BUTTONTITLE}
            modalTabId={modalTabId}
            biddingData={biddingData}
            changeTable={changeTable}
            getModalTabIdState={getModalTabIdState}
            handleMarketPriceBtn={handleMarketPriceBtn}
            handleSize={handleSize}
          />
          <MarketPriceBtnWrapper>
            <HeightMarketPriceBtn
              color="lightGrey"
              name="marketPriceBtn"
              onClick={clickToggle}
              outline
              fullWidth
            >
              <span>입찰 내역 더보기</span>
            </HeightMarketPriceBtn>
          </MarketPriceBtnWrapper>
          <BuyInfo />
        </InfoWrraper>
        {window.sessionStorage.getItem('JWT') !== null &&
        isToggle.favoriteModalBtn === true
          ? ModalListObj.favoriteModal
          : 'hello'}
        {isToggle.marketPriceBtn && ModalListObj.marketPriceModal}
        {isToggle.favoriteModalBtn && ModalListObj.Login}
      </MainContent>
    </Main>
  );
};

export default ProductDetail;

const BUTTONTITLE = [
  { id: 1, title: '최근거래' },
  { id: 2, title: '구매 입찰' },
  { id: 3, title: '판매 입찰' },
];

const Main = styled.div`
  margin: 0;
  padding: 0;
`;

const MainContent = styled.div`
  margin: 0 auto;
  padding: 30px 40px 120px;
  max-width: 1280px;
  display: flex;
`;

const SliderWrapper = styled.div`
  padding-right: 3%;
`;

const InfoWrraper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ebebeb;
  padding-left: 3%;
`;

const MarketPriceBtnWrapper = styled.div`
  width: 563px;
  margin: 0 auto;
  padding: 0;
`;

const HeightMarketPriceBtn = styled(Btn)`
  height: 40px;
  span {
    font-size: ${({ theme }) => theme.fontsize.fontSize1};
    color: ${({ theme }) => theme.palette.darkGrey};
  }
`;
