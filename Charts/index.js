/* eslint-disable prettier/prettier */
import React, {
  memo,
} from 'react';
import {
  Svg,
  Line,
  Polyline,
  Rect,
  LinearGradient,
  Stop,
  Polygon,
} from 'react-native-svg';

const shadowGradientId = 'shadowGradient';

export const ChartsComponent = memo(({
  isLineChart,
}) => {
  const horizontalLines = [];
  const verticalLines = [];
  let chartElement;

  for (let index = 0; index < 4; index += 1) {
    const y = 50 * index;

    horizontalLines.push(
      <Line
        key={index}
        x1={2}
        y1={y}
        x2={300}
        y2={y}
        strokeWidth={1}
        stroke="white"
      />,
    );
  }

  for (let index = 0; index < 5; index += 1) {
    let x = 50 * index;

    if (!isLineChart) {
      x += 25;
    }

    verticalLines.push(
      <Line
        key={index}
        x1={x}
        y1={1}
        x2={x}
        y2={300}
        strokeWidth={1}
        stroke="white"
      />,
    );
  }

  if (isLineChart) {
    const rightBottomPointString = '200,244';
    const lefBottomPointString = '0.5,244';
    const pointsString = '0.5,180 120,180 200,100';

    const shadowPointsString = `${pointsString} ${rightBottomPointString} ${lefBottomPointString}`;

    chartElement = (
      <>
        <LinearGradient
          id={shadowGradientId}
          x1={0}
          y1={28}
          x2={0}
          y2={244}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="green" />
          <Stop offset="1" stopColor="black" stopOpacity={0} />
        </LinearGradient>
        <Polygon
          points={shadowPointsString}
          fill={`url(#${shadowGradientId})`}
        />
        <Polyline
          points={pointsString}
          stroke="green"
        />
      </>
    );
  } else {
    const candles = [];

    for (let index = 0; index < 10; index += 1) {
      const x = index * 30;

      candles.push(
        <Rect
          key={index}
          x={x - 10}
          y={130}
          width={20}
          height={10}
          fill="green"
        />,
      );
    }

    chartElement = candles;
  }

  return (
    <>
      <Svg width={300} height={300}>
        {horizontalLines}
        {verticalLines}
        {chartElement}
      </Svg>
    </>
  );
});
