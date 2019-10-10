import React from 'react';
import { echarts, loadingOption, ReactEcharts } from '../base';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legendScroll';

const Pie = ({ option, className, style, loading }) => {
  const options = {
    title: option.title,
    tooltip: option.tooltip,
    legend: option.legend,
    toolbox: option.toolbox || {
      feature: {
        dataView: { readOnly: true },
        restore: {},
        saveAsImage: {
          pixelRatio: 2
        }
      },
      right: '4%'
    },
    grid: Object.assign(
      {},
      {
        left: '5%',
        right: '5%',
        containLabel: true
      },
      option.grid
    ),
    series: option.series
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

export default Pie;
