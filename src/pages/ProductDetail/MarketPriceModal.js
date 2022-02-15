import React, { useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import STOCKMARKET_INFO from './sizeInfo2';
import MarketPriceTableGroup from './MarketPriceTableGroup';

const MarketPriceModal = ({
  title,
  productAuthor,
  productName,
  productImg,
  buttonTitle,
  biddingData,
  onConfirm,
  modalTabId,
  changeTable,
  isModalOpen,
  handleMarketPriceBtn,
  handleSize,
}) => {
  const sizeInfo = STOCKMARKET_INFO.map(info => info);

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
              <InputBox>
                <p>{productName}</p>
                <p>{productAuthor}</p>
                <SelectWrapper>
                  <SelectBtn
                    options={sizeInfo}
                    onChange={handleMarketPriceBtn}
                    classNamePrefix="react-select"
                    styles={customStyles}
                    value={sizeInfo.find(op => {
                      return op.value === handleSize;
                    })}
                  />
                </SelectWrapper>
              </InputBox>
            </SuggestItem>
          </ProductInfo>
          <Tabs>
            {buttonTitle.map(({ id, title }) => {
              return (
                <Tab
                  key={id}
                  active={id === modalTabId}
                  onClick={() => changeTable(id)}
                >
                  {title}
                </Tab>
              );
            })}
          </Tabs>
          <MarketPriceTableGroup
            tabId={modalTabId}
            isModalOpen={isModalOpen}
            biddingData={biddingData}
            buyingData={biddingData?.filter(x => x.bid_type === 'buyer')}
            sellingData={biddingData?.filter(x => x.bid_type === 'seller')}
          />
        </ModalContent>
      </Wrapper>
    </DarkBackground>
  );
};
export default MarketPriceModal;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: '#9e9e9e',
    minHeight: '30px',
    height: '30px',
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: provided => ({
    ...provided,
    height: '30px',
    padding: '0 6px',
  }),

  input: provided => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    height: '30px',
  }),
};

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
  padding: 0 0 18px 0;
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
  display: flex;
  span {
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
  }
  img {
    width: 70px;
    border-radius: 10px;
  }
`;

const SelectWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  padding-left: 8px;
  height: 70px;
  p:nth-child(1) {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontsize.fontSize2};
    color: ${({ theme }) => theme.palette.black};
  }
  p:nth-child(2) {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontsize.fontSize0};
    color: ${({ theme }) => theme.palette.grey};
  }
`;

const SelectBtn = styled(Select)`
  width: 100%;

  font-size: 12px;
  .react-select__input-container {
    text-align: center;
  }

  .react-select__control {
    height: 30px;
  }
`;

const Wrapper = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  color: ${({ theme }) => theme.palette.black};
`;

const Tabs = styled.div`
  display: flex;
  margin: 0 43px 0 43px;
  margin-bottom: 12px;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius0};
  background-color: #f4f4f4;
`;

const Tab = styled.button`
  flex: 1 0 20%;
  padding: 4px;
  margin: 2px;
  font-weight: ${props => (props.active ? '600' : '400')};
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
  border-radius: 8px;
  color: ${props => (props.active ? '#222222' : '#222222CC')};
  border: 0;
  background-color: ${props => (props.active ? 'white' : 'transparent')};
`;
