import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChartBtn from './ChartBtn';
import PriceChart from './PriceChart';

const ChartBox = () => {
  const [chartData, setChartData] = useState([]);
  const [openChart, setOpenChart] = useState({
    first: true,
    second: false,
    third: false,
  });

  const onClickBtn = x => {
    let obj = {
      first: false,
      second: false,
      third: false,
    };
    obj[x] = true;
    setOpenChart(obj);
  };

  useEffect(() => {
    fetch(`http://15.164.48.155:8000/products/1/quote`)
      .then(res => res.json())
      .then(data => {
        setChartData(data?.quote);
      });
  }, []);

  const changePriceString = price => {
    const convertPrice = Math.floor(parseInt(price) / 1000) * 1000;
    return convertPrice;
  };
  const data = Object.entries(chartData);

  const convertData = data.map(x => ({
    date: x[0],
    price: changePriceString(x[1].quote),
  }));

  console.log(openChart);

  return (
    <ChartOutBox>
      시세
      <ChartBtn onClickBtn={onClickBtn} />
      <PriceChart
        changePriceString={changePriceString}
        data={data}
        convertData={convertData}
        openChart={openChart}
        onClickBtn={onClickBtn}
      />
    </ChartOutBox>
  );
};

const ChartOutBox = styled.div`
  width: 600px;
`;

export default ChartBox;
