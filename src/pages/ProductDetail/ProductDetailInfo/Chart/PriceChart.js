import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import styled from 'styled-components';

const PriceChart = ({ data, changePriceString, convertData }) => {
  return (
    <OutBox>
      <Box>
        <Chart
          data={data}
          changePriceString={changePriceString}
          convertData={convertData.slice(0, 7)}
        />
      </Box>
      <Box none>
        <Chart
          data={data}
          changePriceString={changePriceString}
          convertData={convertData.slice(8, 15)}
        />
      </Box>
      <Box none>
        <Chart
          data={data}
          changePriceString={changePriceString}
          convertData={convertData.slice(16, 23)}
        />
      </Box>
    </OutBox>
  );
};

const OutBox = styled.div``;
const Box = styled.div`
  display: ${({ none }) => (none ? 'none' : 'block')};
`;

export default PriceChart;
