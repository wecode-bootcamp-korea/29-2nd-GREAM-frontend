import React from 'react';
import styled from 'styled-components';
import MarketPriceTableGroup from './MarketPriceTableGroup';
import Select from 'react-select';
import STOCKMARKET_INFO from './sizeInfo2';

const MarketPrice = ({
  buttonTitle,
  modalTabId,
  changeTable,
  biddingData,
  handleMarketPriceBtn,
  handleSize,
}) => {
  const sizeInfo = STOCKMARKET_INFO.map(info => info);

  return (
    <Wrapper>
      <TitleBox>
        <Title>시세</Title>
        <SelectBtn
          options={sizeInfo}
          onChange={handleMarketPriceBtn}
          classNamePrefix="react-select"
          styles={customStyles}
          value={sizeInfo.find(option => {
            return option.value === handleSize;
          })}
        />
      </TitleBox>

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
        biddingData={biddingData?.slice(0, 5)}
        buyingData={biddingData
          ?.filter(x => x.bid_type === 'buyer')
          .slice(0, 5)}
        sellingData={biddingData
          ?.filter(x => x.bid_type === 'seller')
          .slice(0, 5)}
      />
    </Wrapper>
  );
};

export default MarketPrice;

const Wrapper = styled.div``;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  padding: 30px 0 13px 0;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tabs = styled.div`
  display: flex;
  margin: 0;
  margin-bottom: 12px;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius0};
  background-color: #f4f4f4;
`;

const Tab = styled.button`
  flex: 1 0 20%;
  padding: 4px;
  margin: 2px;
  height: 35px;
  font-weight: ${props => (props.active ? '600' : '400')};
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
  border-radius: 8px;
  color: ${props => (props.active ? '#222222' : '#222222CC')};
  border: 0;
  background-color: ${props => (props.active ? 'white' : 'transparent')};
`;
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

  indicatorsContainer: provided => ({
    ...provided,
    height: '30px',
  }),
};

const SelectBtn = styled(Select)`
  width: 100px;
  padding: 23px 0 13px 0;

  font-size: 12px;
  .react-select__input-container {
    text-align: center;
  }

  .react-select__control {
    height: 30px;
  }
`;
