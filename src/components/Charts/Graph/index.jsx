import React from "react";
import { echarts, loadingOption, ReactEcharts } from "../base";
import "echarts/lib/chart/graph";

const Graph = ({ option, className, style, loading, events }) => {
  const options = {
    title: option.title,
    tooltip: option.tooltip,
    legend: option.legend,
    grid: Object.assign(
      {},
      {
        left: "4%",
        right: "4%",
        containLabel: true
      },
      option.grid
    ),
    xAxis: option.xAxis,
    yAxis: option.yAxis,
    series: option.series
  };
  return (
    <ReactEcharts
      events={events}
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

export default Graph;
