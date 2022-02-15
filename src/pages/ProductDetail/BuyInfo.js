import React, { useState } from 'react';
import BUY_INFO from './confirmInfo';
import Btn from './Btn';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import DropDownContent from './DropDownContent';

const BuyInfo = () => {
  const [dropDownToggle, setDropDownToggle] = useState(true);
  const [dropDownId, setDropDownId] = useState(0);

  const showDropdownContent = id => {
    id === dropDownId
      ? setDropDownToggle(!dropDownToggle)
      : setDropDownToggle(true);
    setDropDownId(id);
  };

  return (
    <BuyInfoWrapper>
      <h3>구매 전 꼭 확인해주세요</h3>
      {BUY_INFO?.map(info => {
        const showCondition = info.id === dropDownId && dropDownToggle;
        return (
          <DropDownBox key={info.id}>
            <DropDownBtn
              name={info.name}
              outline
              color="lightGrey"
              fullWidth
              onClick={() => showDropdownContent(info.id)}
              show={showCondition}
            >
              <p>{info.korName}</p>
              <span>
                <FontAwesomeIcon icon={faAngleDown} siez="1x" />
              </span>
            </DropDownBtn>
            <InfoContent show={showCondition}>
              <span>{info.content}</span>
            </InfoContent>
          </DropDownBox>
        );
      })}
      <Info>
        <GuideItem>
          <Box1>
            <span>
              <FontAwesomeIcon icon={faCircleCheck} siez="1x" />
            </span>
          </Box1>
          <Box2>
            <h5>100% 정품 보증</h5>
            <h6>
              GREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를
              보상합니다.
            </h6>
          </Box2>
        </GuideItem>
        <GuideItem>
          <Box1>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} siez="1x" />
            </span>
          </Box1>
          <Box2>
            <h5>엄격한 다중검수</h5>
            <h6>
              모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인
              시스템을 거쳐 검수를 진행합니다.
            </h6>
          </Box2>
        </GuideItem>
        <GuideItem>
          <Box1>
            <span>
              <FontAwesomeIcon icon={faBoxArchive} siez="1x" />
            </span>
          </Box1>
          <Box2>
            <h5>정품인증 패키지</h5>
            <h6>
              검수에 합격한 경우에 한하여 GREAM의 정품인증 패키지가 포함된
              상품이 배송됩니다.
            </h6>
          </Box2>
        </GuideItem>
      </Info>
    </BuyInfoWrapper>
  );
};

export default BuyInfo;

const BuyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 39px;
  h3 {
    width: 100%;
    font-weight: 700;
    border-bottom: 0.2px solid ${({ theme }) => theme.palette.lightGrey2};
    padding-bottom: 12px;
    font-size: ${({ theme }) => theme.fontsize.fontSize4};
  }
`;

const DropDownBtn = styled(Btn)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 18px 0 17px 0;
  height: 60px;
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
  border: 0;
  border-bottom: 1px solid ${props => (props.show ? '#222222' : '#F2F2F2')};
  border-radius: 0;
  color: ${({ theme }) => theme.palette.black};

  p {
    position: absolute;
    left: 0;
    color: ${props => (props.show ? '#222222' : '#222222CC')};
    font-weight: ${props => (props.show ? 600 : 400)};
  }

  span {
    position: absolute;
    right: 0;
    color: #bbbbbb;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 40px;
  border-bottom: 0.2px solid ${({ theme }) => theme.palette.lightGrey2};
`;

const GuideItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  font-size: 13px;
`;

const DropDownBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoContent = styled(DropDownContent)`
  padding: 15px 0;
  line-height: 2;
  border-bottom: 0.2px solid ${({ theme }) => theme.palette.lightGrey2};
  display: ${props => (props.show ? 'block' : 'none')};
  span {
    color: ${({ theme }) => theme.palette.darkGrey};
  }
`;

const Box1 = styled.div`
  font-size: 24px;
  margin-right: 14px;
  color: ${({ theme }) => theme.palette.black};
`;

const Box2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h5 {
    color: ${({ theme }) => theme.palette.black};
  }
  h6 {
    margin-top: 2px;
    color: ${({ theme }) => theme.palette.grey};
    line-height: 1.5;
  }
`;
