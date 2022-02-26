import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const Chart = ({ data, changePriceString, convertData }) => {
  const tooltipStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '8px',
    opacity: '0.8',
  };

  return (
    <Charts>
      <ResponsiveContainer width="563px" height="600px" aspect={3 / 1}>
        <LineChart data={convertData} width={500} height={300}>
          <XAxis dataKey="date" stroke="5550bd" />
          <YAxis orientation="right" stroke="" />
          <Line
            type="linear"
            dataKey="price"
            stroke="red"
            dot=""
            activeDot={{ r: 2 }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            itemStyle={{ color: 'white', fontSize: '12px' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Charts>
  );
};

const Charts = styled(ResponsiveContainer)`
  margin-top: 30px;

  .recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis {
    display: none;
  }

  .recharts-layer.recharts-cartesian-axis.recharts-yAxis.yAxis {
    font-size: 13px;
  }

  .recharts-default-tooltip {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .recharts-tooltip-label {
      font-size: 13px;
      font-weight: bold;
    }

    .recharts-tooltip-item-list {
      font-size: 13px;
    }
  }
`;

export default Chart;
