import React, { useState, useEffect } from 'react';
import Chart from './Chart';

const PriceChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`http://15.164.48.155:8000/products/1/quote`)
      .then(res => res.json())
      .then(data => {
        setChartData(data?.quote);
      });
  }, []);

  return (
    <div>
      <Chart chartData={chartData} />
    </div>
  );
};

export default PriceChart;
