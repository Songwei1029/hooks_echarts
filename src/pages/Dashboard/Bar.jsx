import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import CommomBar from '@/components/Charts/Bar';

const Bar = memo(() => {
  // const getDatas = useMemo(() => getData(data), [data]);
  const option = {
    tooltip: {
      trigger: 'axis',
      confine: true
    },
    toolbox: {},
    legend: {
      orient: 'horizontal', // 图例列表的布局朝向
      right: '4%',
      top:'1%',
      itemWidth: 15, // 图例的图形宽度
      data: [
        {
          'name': 'pc',       
          textStyle: {
            color: 'black'
          }
        },
        {
          'name': 'weixin',
          textStyle: {
            color: 'black'
          }
        },
        {
          'name': 'o2o',
          textStyle: {
            color: 'black'
          }
        },
        {
          'name': 'ios',
          textStyle: {
            color: 'black'
          }
        },
        {
          'name': 'web',
          textStyle: {
            color: 'black'
          }
        },
      ]
    },
    grid: {
      left: '4%',
      right: '4%',
      bottom: '10%',
      top: '14%'
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月',  '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: 'black'
      }
    },
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'black'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
      },
    ],
    series: [
      {
        name: 'pc',
        type: 'bar', // type为bar就是柱状图，为line就是折线图，这两个几乎可以共用，只需要改一下type
        barWidth: '50%', // 控制柱条宽度
        stack: '总量', // 设置这个会让 不同系列但维度相同（就是series下每个{}里面data，相同的下标值相加） 的值相加
        data: [100, 242,421,231,542,624,624,656,744,144,614,973],
        itemStyle: {
          color: '#008ee7'
        }
      },
      {
        name: 'o2o',
        type: 'bar',
        stack: '总量',
        barWidth: '50%',
        data: [200, 342,221,531,142,224,124,756,244,644,214,373],
        itemStyle: {
          color: '#7257dc'
        }
      },
      {
        name: 'ios',
        type: 'bar',
        stack: '总量',
        barWidth: '50%',
        data: [400, 282,121,731,142,224,124,156,244,844,614,903],
        itemStyle: {
          color: '#d9da6d'
        }
      },
      {
        name: 'weixin',
        type: 'bar',
        stack: '总量',
        barWidth: '50%',
        data: [90, 142,821,731,142,124,224,156,144,844,114,173],
        itemStyle: {
          color: '#e5727b'
        }
      },
      {
        name: 'web',
        type: 'bar',
        stack: '总量',
        barWidth: '50%',
        itemStyle: {
          color: '#04ae98'
        },
        data: [50, 742,121,631,242,324,624,456,144,544,814,573]
      },
    ]
  };
  return <CommomBar option={option}/>;
}, isEqual);

export default Bar;