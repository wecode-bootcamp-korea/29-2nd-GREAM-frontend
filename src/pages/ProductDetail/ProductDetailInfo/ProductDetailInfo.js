import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import DetailDesc from './DetailDesc/DetailDesc';
import DeliveryBox from './DetailDesc/DeliveryBox/DeliveryBox';
import Modal from 'react-modal';
import ModalTop from './PurchaseModal/ModalTop';
import ModalContents from './PurchaseModal/ModalContents';
import PurchaseBtn from './PurchaseModal/PurchaseBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-regular-svg-icons';
import Btn from '../Btn';

const ProductDetailInfo = ({
  productBox,
  sizeBox,
  setProductBox,
  clickToggle,
  isCheckedBookMark,
  renderNumber,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [purchaseModal, setPurchaseModal] = useState(false);
  const [sellModal, setSellModal] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);

  const [pickedSize, setPickedSize] = useState(null);

  const SIZE_INIT = '모든 사이즈';
  const [priceForTheSize, setPriceForTheSize] = useState(SIZE_INIT);

  const [selectedSize, setSelectedSize] = useState('');

  const customStyles = {
    content: {
      top: '10%',
      left: '30%',
      bottom: 'auto',
      width: '40vw',
    },
  };

  const margin = {
    marginRight: '10px',
  };

  return (
    <ProductDetailInfoBox>
      <Brand>{productBox?.author}</Brand>
      <Name>{productBox?.name}</Name>
      <Size>
        <SizeComment>사이즈</SizeComment>
        <ClickSizeBox onClick={() => setSizeModal(true)}>
          {priceForTheSize}
        </ClickSizeBox>
      </Size>
      <TransactionAmountBox>
        <TransactionAmountComment>최근 거래가</TransactionAmountComment>
        <TransactionAmount>
          {pickedSize !== null ? pickedSize : productBox?.recent_price}
        </TransactionAmount>
      </TransactionAmountBox>
      <AmountBox>
        <Button onClick={() => setPurchaseModal(true)}>
          <span style={margin}>구매</span>
          <div>{sizeBox?.buyer_size_price?.[0].price}</div>
        </Button>
        <Button onClick={() => setSellModal(true)} sell>
          <span style={margin}>판매</span>
          <div>{sizeBox?.seller_size_price?.[0].price}</div>
        </Button>
        <Modal
          isOpen={purchaseModal}
          sizeBox={sizeBox}
          onRequestClose={() => {
            setPurchaseModal(false);
            setIsOpen(false);
          }}
          style={customStyles}
        >
          <ModalTop productBox={productBox} />
          <ModalContents
            sizeBox={sizeBox}
            setSelectedSize={setSelectedSize}
            setPickedSize={setPickedSize}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
          {isOpen && (
            <PurchaseBtn sizeBox={sizeBox} selectedSize={selectedSize} />
          )}
        </Modal>
        <Modal
          isOpen={sellModal}
          sizeBox={sizeBox}
          onRequestClose={() => setSellModal(false)}
          style={customStyles}
        >
          <ModalContents
            sizeBox={sizeBox}
            setSelectedSize={setSelectedSize}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            setPickedSize={setPickedSize}
            sell
          />
          {isOpen && (
            <PurchaseBtn sizeBox={sizeBox} selectedSize={selectedSize} isSell />
          )}
        </Modal>
        <Modal
          isOpen={sizeModal}
          sizeBox={sizeBox}
          onRequestClose={() => setSizeModal(false)}
          style={customStyles}
        >
          <ModalContents
            sizeBox={sizeBox}
            setSelectedSize={setSelectedSize}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            setPickedSize={setPickedSize}
            setPriceForTheSize={setPriceForTheSize}
          />
        </Modal>
      </AmountBox>
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
      <DetailDesc productBox={productBox} />
      <DeliveryBox />
    </ProductDetailInfoBox>
  );
};

export default ProductDetailInfo;

const ProductDetailInfoBox = styled.div`
  width: 100%;
  padding-left: 0;
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
`;

const Brand = styled.div`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontsize.fontSize4};
  text-decoration: 2px underline;
  margin-bottom: 10px;
`;

const Name = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.grey};
`;

const Size = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.2px solid ${({ theme }) => theme.palette.lightGrey};
  padding-bottom: 12px;
`;

const SizeComment = styled.span`
  color: ${({ theme }) => theme.palette.darkGrey};
  font-size: 13px;
`;

const ClickSizeBox = styled.button`
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontsize.fontSize3};
  font-weight: 600;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const TransactionAmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

const TransactionAmountComment = styled.span`
  color: ${({ theme }) => theme.palette.darkGrey};
  font-size: 13px;
`;

const TransactionAmount = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize5};
  font-weight: 700;
`;

const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

const FavoriteBtnWrapper = styled.div`
  width: 563px;
  margin: 0 auto;
  margin-top: 12px;
  padding: 0;
`;

const HeightFavoriteBtn = styled(Btn)`
  height: 60px;
  span {
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    color: ${({ theme }) => theme.palette.black};
    margin-left: 4px;
  }
`;
