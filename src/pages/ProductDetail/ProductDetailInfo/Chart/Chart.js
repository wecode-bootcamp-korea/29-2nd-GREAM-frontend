import { fontFace } from 'polished';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const Chart = ({ chartData }) => {
  const changePriceString = price => {
    const convertPrice = Math.floor(parseInt(price) / 1000) * 1000;
    return convertPrice;
  };
  const data = Object.entries(chartData);

  const convertData = data.map(x => ({
    date: x[0],
    price: changePriceString(x[1].quote),
  }));

  const tooltipStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '8px',
    opacity: '0.8',
  };

  // const CustomTooltip = () => <div>{TOOLTIP_DATAKEY[activeLanguage]}</div>;

  return (
    <Charts>
      <ResponsiveContainer width="80%" height="80%" aspect={3 / 1}>
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
            // content={<CustomTooltip />}
            contentStyle={tooltipStyle}
            itemStyle={{ color: 'white', fontSize: '12px' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Charts>
  );
};

const Charts = styled.div``;

export default Charts;
