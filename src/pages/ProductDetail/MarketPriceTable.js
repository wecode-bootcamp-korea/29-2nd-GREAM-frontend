import React from 'react';
import styled from 'styled-components';

const MarketPriceTable = ({
  thFirst,
  thSecond,
  thThird,
  children,
  modal,
  tabId,
}) => {
  return (
    <TableWrapper modal={modal}>
      <TableHeader modal={modal}>
        <tr>
          <th>{thFirst}</th>
          <th>{thSecond}</th>
          <th>{thThird}</th>
        </tr>
      </TableHeader>
      <TableBody modal={modal} tabId={tabId}>
        {children}
      </TableBody>
    </TableWrapper>
  );
};

export default MarketPriceTable;

const TableWrapper = styled.table`
  margin-top: 16px;
  width: 100%;
  font-size: 14px;
  padding: 0 0 0 ${props => (props.modal ? '43px' : '0')}; ;
`;

const TableHeader = styled.thead`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGrey2};
  margin-bottom: 3px;

  th {
    text-align: center;
    font-weight: 400;
    padding-bottom: 8px;
    font-size: ${({ theme }) => theme.fontsize.fontSize0};
    color: ${({ theme }) => theme.palette.darkGrey};
  }

  th:nth-child(1) {
    text-align: left;
    padding-right: ${props => (props.modal ? '33px' : '0')};
  }
  th:nth-child(2) {
    text-align: right;
    padding-right: ${props => (props.modal ? '33px' : '0')};
  }
  th:nth-child(3) {
    text-align: right;
    padding-right: ${props => (props.modal ? '50px' : '0')};
  }
`;

const TableBody = styled.tbody`
  display: block;
  overflow: ${props => (props.modal ? 'auto' : 'visible')};
  height: ${props => (props.modal ? '270px' : '130px')};
  width: ${props => (props.modal ? '370px' : '100%')};
  color: ${({ theme }) => theme.palette.black};
  tr {
    td:nth-child(1) {
      padding-top: 5px;
    }
    td:nth-child(2) {
      padding-right: ${props =>
        (props.modal && props.tabId === 2) || (props.modal && props.tabId === 3)
          ? '20px'
          : '0'};
      font-weight: ${props =>
        props.tabId === 2 || props.tabId === 3 ? '600' : '400'};
      text-align: right;
    }
    td:nth-child(3) {
      padding-right: ${props => (props.modal ? '18px' : '0')};
      text-align: right;
      font-weight: ${props => (props.tabId === 1 ? '600' : '400')};
    }
  }

  & > tr > td {
    padding: 5px 0;
    width: ${props => (props.modal ? '193px' : '200px')};
  }
`;
