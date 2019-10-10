import React from 'react';
import { echarts, loadingOption, ReactEcharts } from '../base';
import 'echarts/lib/chart/map';

const Map = ({ option, className, style, loading }) => {
  const options = {
    title: option.title,
    tooltip: option.tooltip,
    legend: option.legend,
    toolbox: option.toolbox,
    grid: Object.assign(
      {},
      {
        left: '4%',
        right: '4%',
        containLabel: true
      },
      option.grid
    ),
    xAxis: option.xAxis,
    yAxis: option.yAxis,
    series: option.series,
    visualMap: option.visualMap
  };
  return (
    <ReactEcharts
      className={className}
      style={style}
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      loadingOption={loadingOption}
      showLoading={loading}
    />
  );
};

export default Map;
