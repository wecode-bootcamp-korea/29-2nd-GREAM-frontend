import React from 'react';
import styled from 'styled-components';
import ChartBtn from './ChartBtn';
import PriceChart from './PriceChart';

const ChartBox = () => {
  return (
    <div>
      시세
      <ChartBtn />
      <PriceChart />
    </div>
  );
};

export default ChartBox;
