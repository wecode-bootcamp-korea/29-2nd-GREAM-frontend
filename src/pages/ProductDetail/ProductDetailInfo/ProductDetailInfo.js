import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import DetailDesc from './DetailDesc/DetailDesc';
import DeliveryBox from './DetailDesc/DeliveryBox/DeliveryBox';
import Modal from 'react-modal';
import ModalTop from './PurchaseModal/ModalTop';
import ModalContents from './PurchaseModal/ModalContents';
import PurchaseBtn from './PurchaseModal/PurchaseBtn';

const ProductDetailInfo = ({ productBox }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [purchaseModal, setPurchaseModal] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);

  const set = productBox[0]?.size[0]?.price;
  const [selectedSize, setSelectedSize] = useState(set && set);

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
      <Brand>{productBox[0]?.author}</Brand>
      <Name>{productBox[0]?.product_name}</Name>
      <Size>
        <SizeComment>사이즈</SizeComment>
        <ClickSizeBox onClick={() => setSizeModal(true)}>
          모든 사이즈
        </ClickSizeBox>
      </Size>
      <TransactionAmountBox>
        <TransactionAmountComment>최근 거래가</TransactionAmountComment>
        <TransactionAmount>286,000원</TransactionAmount>
      </TransactionAmountBox>
      <AmountBox>
        <Button onClick={() => setModalOpen(true)} purchase>
          <span style={margin}>구매</span>
          <div>260,000원</div>
        </Button>
        <Button onClick={() => setPurchaseModal(true)} cell>
          <span style={margin}>판매</span>
          <div>390,000원</div>
        </Button>
        <Modal
          isOpen={modalOpen}
          productBox={productBox}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
        >
          <ModalTop productBox={productBox} />
          <ModalContents
            productBox={productBox}
            setSelectedSize={setSelectedSize}
          />
          <PurchaseBtn
            productBox={productBox}
            selectedSize={selectedSize}
            set={set}
          />
        </Modal>
        <Modal
          isOpen={purchaseModal}
          productBox={productBox}
          onRequestClose={() => setPurchaseModal(false)}
          style={customStyles}
        >
          <ModalContents productBox={productBox} />
        </Modal>
        <Modal
          isOpen={sizeModal}
          productBox={productBox}
          onRequestClose={() => setSizeModal(false)}
          style={customStyles}
        >
          <ModalContents productBox={productBox} />
        </Modal>
      </AmountBox>
      <DetailDesc productBox={productBox} />
      <DeliveryBox />
    </ProductDetailInfoBox>
  );
};

const ProductDetailInfoBox = styled.div`
  width: 45vw;
  border-left: 0.2px solid ${({ theme }) => theme.palette.grey};
  padding: 12px;
`;

const Brand = styled.div`
  color: ${({ theme }) => theme.blackColor};
  font-size: ${({ theme }) => theme.fontsize.fontSize4};
  font-weight: 900;
  text-decoration: 2px underline;
  margin-bottom: 10px;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.blackColor};
  font-size: ${({ theme }) => theme.fontsize.fontSize4};
  margin-bottom: 20px;
`;

const Size = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2px solid ${({ theme }) => theme.palette.grey};
  padding-bottom: 13px;
`;

const SizeComment = styled.span`
  color: ${({ theme }) => theme.palette.darkGrey};
  font-size: 13px;
`;

const ClickSizeBox = styled.button`
  color: ${({ theme }) => theme.palette.darkGrey};
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
  padding-top: 15px;
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
  margin-bottom: 50px;
`;

export default ProductDetailInfo;
