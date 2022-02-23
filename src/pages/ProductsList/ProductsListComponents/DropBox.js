import React, { useState } from 'react';
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
          {filterData.filterType[1] + (dropDown ? '-' : '+')}
        </ClickTitleBtn>
      </TitleWrapper>

      {dropDown ? (
        filterData.idNameList.map(idNameList => {
          return (
            <DownList key={Object.keys(idNameList)}>
              <ListLabel>
                <ListCheckBox
                  type="checkbox"
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
`;

const TitleWrapper = styled.div`
  background-color: red;
`;
const ClickTitleBtn = styled(Btn)`
  padding: 0;
  height: 10px;
  font-size: ${({ theme }) => theme.fontsize.fontSize1};
  border: 0;
`;

const DownList = styled.div`
  padding: 4px 0;
`;

const ListCheckBox = styled.input`
  border: 0;
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
`;
