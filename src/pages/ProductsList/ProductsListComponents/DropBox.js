import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Btn from '../../ProductDetail/Btn';

const DropBox = ({ filterData, setFilter }) => {
  const [dropDown, setDropDown] = useState('');

  const dropDownButton = () => {
    setDropDown(!dropDown);
  };

  return (
    <DropBoxWrapper>
      <TitleWrapper>
        <ClickTitleBtn
          color="gray"
          outline
          type="button"
          onClick={dropDownButton}
        >
          {filterData.filterType[1]}
          <span>{dropDown ? '-' : '+'}</span>
        </ClickTitleBtn>
      </TitleWrapper>

      {dropDown ? (
        filterData.idNameList.map(idNameList => {
          return (
            <DownList key={Object.keys(idNameList)}>
              <ListLabel>
                <ListCheckBox
                  type="checkbox"
                  id={filterData.idNameList[0].key}
                  name={Object.keys(idNameList)}
                  onChange={e => setFilter(e, filterData.filterType[0])}
                />
                {Object.values(idNameList)}
              </ListLabel>
            </DownList>
          );
        })
      ) : (
        <BasicType>{`모든 ${filterData.filterType[1]}`}</BasicType>
      )}
    </DropBoxWrapper>
  );
};

export default DropBox;

const DropBoxWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  padding-top: 18px;
`;

const TitleWrapper = styled.div`
  width: 100%;
`;
const ClickTitleBtn = styled(Btn)`
  width: 100%;
  justify-content: space-between;
  padding: 0;
  height: 10px;
  font-size: ${({ theme }) => theme.fontsize.fontSize0};
  border: 0;
  font-weight: 500;
  span {
    font-size: 16px;
  }
`;

const DownList = styled.div`
  padding: 0;
  padding-top: 22px;
`;

const ListCheckBox = styled.input`
  border: 0;
  color: ${props => (props.isTrusted ? 'red' : 'green')};
`;

const ListLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 13px;
`;

const BasicType = styled.div`
  color: ${({ theme }) => theme.palette.grey};
  margin-top: 4px;
  font-size: 15px;
  padding-top: 11px;
  padding-bottom: 11px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGrey};
`;
