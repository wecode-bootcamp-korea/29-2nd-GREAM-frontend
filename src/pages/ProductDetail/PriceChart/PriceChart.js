import React from 'react';
import Chart from './Chart';
import styled from 'styled-components';

const PriceChart = ({ data, changePriceString, convertData, openChart }) => {
  return (
    <OutBox>
      {openChart.first && (
        <Box>
          <Chart
            data={data}
            changePriceString={changePriceString}
            convertData={convertData?.slice(0, 7)}
          />
        </Box>
      )}
      {openChart.second && (
        <Box>
          <Chart
            data={data}
            changePriceString={changePriceString}
            convertData={convertData?.slice(8, 15)}
          />
        </Box>
      )}
      {openChart.third && (
        <Box>
          <Chart
            data={data}
            changePriceString={changePriceString}
            convertData={convertData?.slice(16, 23)}
          />
        </Box>
      )}
    </OutBox>
  );
};

const OutBox = styled.div``;
const Box = styled.div``;

export default PriceChart;
