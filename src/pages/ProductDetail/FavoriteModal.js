import React, { useEffect } from 'react';
import styled from 'styled-components';
import FavoriteBtn from './FavoriteBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

const FavoriteModal = ({
  title,
  productName,
  productImg,
  productSizes,
  confirmText,
  onConfirm,
  visible,
}) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  if (!visible) return null;

  return (
    <DarkBackground onClick={onConfirm}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <ModalHead>
          <h2>{title}</h2>
        </ModalHead>
        <ModalContent>
          <ProductInfo>
            <SuggestItem>
              <img alt="제품이미지" src={productImg} />
              <span>{productName}</span>
            </SuggestItem>
          </ProductInfo>
          <ProductSize>
            {productSizes?.map(size => (
              <MarginButton
                color="lightGrey"
                outline
                fullWidth
                key={size.id}
                name={size.name}
              >
                <span>{size.name}</span>
                <span>
                  <FontAwesomeIcon icon={farBookmark} size="1x" />
                </span>
              </MarginButton>
            ))}
          </ProductSize>
          <ModalBottom>
            <ConfirmBtn color="lightGrey" outline onClick={onConfirm}>
              <span>{confirmText}</span>
            </ConfirmBtn>
          </ModalBottom>
        </ModalContent>
      </ModalWrapper>
    </DarkBackground>
  );
};
export default FavoriteModal;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 110;
`;

const ModalWrapper = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  color: ${({ theme }) => theme.palette.black};
`;

const ModalHead = styled.div`
  margin: 0;
  padding: 0;
  h2 {
    font-size: ${({ theme }) => theme.fontsize.fontSize4};
    padding: 18px 50px 20px;
    font-weight: 600;
    text-align: center;
  }
`;

const ModalContent = styled.div`
  margin: 0;
  padding: 0;
  h2 {
    line-height: 22px;
    padding: 18px 50px 20px;
    font-size: ${({ theme }) => theme.fontsize.fontSize4};
    font-weight: 600;
    text-align: center;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  padding: 0 43px 0 43px;
`;

const SuggestItem = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  position: relative;
  span {
    position: absolute;
    bottom: 38px;
    left: 90px;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
  }
  img {
    width: 70px;
    border-radius: 10px;
  }
`;

const ProductSize = styled.div`
  padding: 8px 43px 0 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MarginButton = styled(FavoriteBtn)`
  margin: 20px 4px 10px 4px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.palette.black};
    font-size: ${({ theme }) => theme.fontsize.fontSize0};
  }
`;

const ConfirmBtn = styled(FavoriteBtn)`
  color: ${({ theme }) => theme.palette.black};
  &:active {
    background-color: ${({ theme }) => theme.palette.lightGrey2};
  }
`;

const ModalBottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 43px 32px 43px;
`;
