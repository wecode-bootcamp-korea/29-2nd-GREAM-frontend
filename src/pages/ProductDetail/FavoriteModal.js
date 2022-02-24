import React, { useEffect } from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteModal = ({
  title,
  productName,
  productImg,
  productSizes,
  confirmText,
  onConfirm,
  btnClick,
  isClickBtn,
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

  return (
    <DarkBackground onClick={onConfirm}>
      <Wrapper onClick={e => e.stopPropagation()}>
        <ModalHead>
          <h2>{title}</h2>
        </ModalHead>
        <ModalContent>
          <ProductInfo>
            <SuggestItem>
              <img alt="제품이미지" src={productImg?.url} />
              <span>{productName}</span>
            </SuggestItem>
          </ProductInfo>
          <ProductSize>
            {productSizes?.map(size => {
              return (
                <MarginBtn
                  onClick={btnClick}
                  key={size.id}
                  name={size.name}
                  value={size.id}
                  color="lightGrey"
                  outline
                  fullWidth
                >
                  <>
                    <span>{size.name}</span>
                    <span>
                      <FontAwesomeIcon
                        icon={isClickBtn[size.name] ? fasBookmark : farBookmark}
                        size="1x"
                      />
                    </span>
                  </>
                </MarginBtn>
              );
            })}
          </ProductSize>
          <ModalBottom>
            <ConfirmBtn
              onClick={onConfirm}
              name="favoriteModalBtn"
              color="lightGrey"
              outline
            >
              <span>{confirmText}</span>
            </ConfirmBtn>
          </ModalBottom>
        </ModalContent>
      </Wrapper>
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

const ConfirmBtn = styled(Btn)`
  width: 100px;
  height: 42px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.palette.black};
  &:active {
    background-color: ${({ theme }) => theme.palette.lightGrey2};
  }
`;
const MarginBtn = styled(Btn)`
  margin: 20px 4px 10px 4px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.palette.black};
    font-size: ${({ theme }) => theme.fontsize.fontSize0};
  }
  span {
    color: ${({ theme }) => theme.palette.black};
    font-size: ${({ theme }) => theme.fontsize.fontSize0};
  }
`;

const ModalBottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 43px 32px 43px;
`;

const Wrapper = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  color: ${({ theme }) => theme.palette.black};
`;
