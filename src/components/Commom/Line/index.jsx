import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import PropTypes from 'prop-types';
import Bar from '@/components/Charts/Bar';

const Line = memo(({ className, data, loading }) => {
  const { xAxis_data = [], series = [], legend_Data = [], grid = {}, formatter = '' } = data;
  const option = {
    tooltip: {
      trigger: 'axis',
      confine: true,
      formatter: formatter || null
    },
    legend: {
      bottom: 10,
      data: legend_Data
    },
    grid: {
      top: grid['top'] || '5%',
      left: grid['left'] || '3%',
      right: grid['right'] || '3%',
      bottom: grid['bottom'] || '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xAxis_data,
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 200,
        interval: 40,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        min: 0,
        max: 100,
        splitNumber: 5,
        interval: 20,
        axisLabel: {
          formatter: '{value} %'
        }
        // position: 'right'

        // gridIndex: 1,
      }
    ],
    series,
    toolbox: {
      show: false
    }
  };
  return <Bar className={className} option={option} loading={loading} />;
}, isEqual);

Line.propTypes = {
  data: PropTypes.shape(
    // 数据源，因不确定字段，所以需要自己处理好传递过来
    {
      xAxis_data: PropTypes.array.isRequired, // x轴的data数组
      series: PropTypes.arrayOf(
        PropTypes.shape({
          // 整个series
          data: PropTypes.arrayOf(PropTypes.number).isRequired,
          name: PropTypes.string,
          type: PropTypes.oneOf(['line', 'bar']),
          barWidth: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.oneOf([null, undefined, 'auto'])
          ])
        })
      ),
      legend_Data: PropTypes.array.isRequired, // legend下的data
      grid: PropTypes.object, // 直角坐标系内绘图网格
      formatter: PropTypes.oneOfType([
        // 提示框的显示格式
        PropTypes.string,
        PropTypes.func
      ])
    }
  ),
  loading: PropTypes.bool, // loading
  className: PropTypes.string // 自定义类名
};

export default Line;
