import React from 'react';
import styled from 'styled-components';
import MarketPriceTable from './MarketPriceTable';

const MarketPriceTableGroup = ({
  biddingData,
  buyingData,
  sellingData,
  tabId,
  isModalOpen,
}) => {
  const changeDateString = date => {
    const convertDate = date.split('-').join('');
    const year = convertDate.substr(2, 2);
    const month = convertDate.substr(4, 2);
    const day = convertDate.substr(6, 2);
    return year + '/' + month + '/' + day;
  };

  const changePriceString = price => {
    const convertPrice = (
      Math.floor(parseInt(price) / 1000) * 1000
    ).toLocaleString();
    return convertPrice + '원';
  };

  if (biddingData === undefined)
    return <LoadingBox>시세 페이지를 로딩중 입니다.</LoadingBox>;

  return (
    <TableWrapper openTab={tabId}>
      <MarketPriceTable
        thFirst="사이즈"
        thSecond="거래가"
        thThird="거래일"
        modal={isModalOpen}
        tabId={tabId}
      >
        {biddingData?.map((bidding, idx) => {
          return (
            <tr key={idx}>
              <td>{bidding.size}</td>
              <td>{changePriceString(bidding.price)}</td>
              <td>{changeDateString(bidding.created_at)}</td>
            </tr>
          );
        })}
      </MarketPriceTable>
      <MarketPriceTable
        thFirst="사이즈"
        thSecond="구매 희망가"
        thThird="수량"
        modal={isModalOpen}
        tabId={tabId}
      >
        {buyingData?.map((buying, idx) => {
          return (
            <tr key={idx}>
              <td>{buying.size}</td>
              <td>{changePriceString(buying.price)}</td>
              <td>{buying.count}</td>
            </tr>
          );
        })}
      </MarketPriceTable>
      <MarketPriceTable
        thFirst="사이즈"
        thSecond="판매 희망가"
        thThird="수량"
        modal={isModalOpen}
        tabId={tabId}
      >
        {sellingData?.map((selling, idx) => {
          return (
            <tr key={idx}>
              <td>{selling.size}</td>
              <td>{changePriceString(selling.price)}</td>
              <td>{selling.count}</td>
            </tr>
          );
        })}
      </MarketPriceTable>
    </TableWrapper>
  );
};

export default MarketPriceTableGroup;

const LoadingBox = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
  padding-top: 20px;
  font-weight: 400;
`;

const TableWrapper = styled.div`
  font-weight: 400;
  & > table:nth-child(1) {
    display: ${props => (props.openTab === 1 ? 'block' : 'none')};
  }
  & > table:nth-child(2) {
    display: ${props => (props.openTab === 2 ? 'block' : 'none')};
  }
  & > table:nth-child(3) {
    display: ${props => (props.openTab === 3 ? 'block' : 'none')};
  }
`;
