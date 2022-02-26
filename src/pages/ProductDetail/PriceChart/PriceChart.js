import React from 'react';
import Chart from './Chart';
import styled from 'styled-components';

const PriceChart = ({ data, changePriceString, convertData, openChart }) => {
  return (
    <OutBox>
      {openChart?.first && (
        <Box>
          <Chart
            data={data}
            changePriceString={changePriceString}
            convertData={convertData?.slice(0, 7)}
          />
        </Box>
      )}
      {openChart?.second && (
        <Box>
          <Chart
            data={data}
            changePriceString={changePriceString}
            convertData={convertData?.slice(0, 15)}
          />
        </Box>
      )}
      {openChart?.third && (
        <Box>
          <Chart
            data={data}
            changePriceString={changePriceString}
            convertData={convertData?.slice(0, 29)}
          />
        </Box>
      )}
    </OutBox>
  );
};

const OutBox = styled.div`
  height: 200px;
`;
const Box = styled.div`
  height: 200px;
`;

export default PriceChart;
