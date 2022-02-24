import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContents = ({
  sizeBox,
  setIsOpen,
  setSelectedSize,
  setPickedSize,
  setPriceForTheSize,
  sell,
  numberWithCommas,
}) => {
  const [changedColor, setChangedColor] = useState({
    Small: false,
    Medium: false,
    Large: false,
  });

  const onClick = e => {
    const selectedPrice = e.currentTarget.getAttribute('value');
    const selectedSize = e.currentTarget.getAttribute('name');

    setIsOpen(true);
    setSelectedSize(selectedPrice);
    setChangedColor({ [selectedSize]: true });
    setPickedSize(selectedPrice);
    setPriceForTheSize(selectedSize);
  };

  return sell ? (
    <OutBox>
      {sizeBox?.seller_size_price?.map((x, index) => (
        <SizeBtn
          key={index}
          value={x.price}
          name={x.size}
          onClick={onClick}
          changedColor={changedColor}
          bold={changedColor[x.size]}
        >
          <Box>
            <Size>{x.size}</Size>
            <Price>{numberWithCommas(Math.floor(x.price))}원</Price>
            {/* {numberWithCommas(Math.floor(x.price))}원 */}
          </Box>
        </SizeBtn>
      ))}
    </OutBox>
  ) : (
    <OutBox>
      {sizeBox?.buyer_size_price?.map((x, index) => (
        <SizeBtn
          key={index}
          value={x.price}
          name={x.size}
          onClick={onClick}
          changedColor={changedColor}
          bold={changedColor[x.size]}
        >
          <Box>
            <Size>{x.size}</Size>
            <Price>{numberWithCommas(Math.floor(x.price))}원</Price>
          </Box>
        </SizeBtn>
      ))}
    </OutBox>
  );
};

const OutBox = styled.div`
  padding: 20px;
`;

const SizeBtn = styled.button`
  width: 100%;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius2};
  background-color: white;
  padding: 16px;
  margin-bottom: 10px;

  ${({ bold }) =>
    bold ? `border : 3px solid black` : `border: 0.8px solid black`}
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Size = styled.span`
  font-size: ${({ theme }) => theme.fontsize.fontSize2};
  font-weight: 700;
  margin-bottom: 3px;
`;

const Price = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.red};
`;

export default ModalContents;
