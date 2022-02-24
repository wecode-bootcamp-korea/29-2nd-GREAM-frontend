import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ChartBtn from './ChartBtn';
import PriceChart from './PriceChart';

const ChartBox = () => {
  const { id } = useParams();
  const [chartData, setChartData] = useState([]);
  const [openChart, setOpenChart] = useState({
    first: false,
    second: false,
    third: true,
  });
  const [A, setA] = useState(0);

  const onClickBtn = (x, id) => {
    let obj = {
      first: false,
      second: false,
      third: false,
    };
    obj[x] = true;
    setOpenChart(obj);

    setA(id + 1);
  };

  useEffect(() => {
    fetch(`http://15.164.48.155:8000/products/${id}/quote`)
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

  return (
    <ChartOutBox>
      <ChartBtn onClickBtn={onClickBtn} A={A} />
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
  width: 563px;
`;

export default ChartBox;
