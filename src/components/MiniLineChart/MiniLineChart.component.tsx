import FusionCharts from 'react-native-fusioncharts';
import React from 'react';
import { View } from 'react-native';

const MiniLineChart = ({ data }) => {
  const chartConfig = {
    type: 'area2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Cryptocurrency Price Over Time",
        xAxisName: "Date",
        yAxisName: "Price (USD)",
        theme: "fusion",
        numberPrefix: "$"
      },
      data: data
    }
  };

  return (
    <View style={{ height: 400 }}>
      <FusionCharts
        type={chartConfig.type}
        width={chartConfig.width}
        height={chartConfig.height}
        dataFormat={chartConfig.dataFormat}
        dataSource={chartConfig.dataSource}
      />
    </View>
  );
};

export default MiniLineChart;
