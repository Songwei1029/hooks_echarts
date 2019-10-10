import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import PictorialBar from '@/components/Charts/PictorialBar';

const Bar_three = memo(() => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}：<br />{a}：{c0}'
    },
    grid: {
      left: '-6%',
      right: '8%',
      bottom: '3%',
      top: '20%',
      containLabel: true,
    },
    // legend: {
    //   data: [{
    //     'name': '商品品类',
    //     textStyle: {
    //       color: 'white'
    //     }
    //   }],
    //   right: '8%',
    //   top: '2%',
    //   itemHeight: 6,
    //   itemWidth: 15,
    //   itemGap: 30
    // },
    // xAxis: {
    //   type: 'value',
    //   show: false
    // },
    // yAxis: {
    //   type: 'category',
    //   data: ['杨文辉', '余秋', '姜田', '陈晓成', '徐曼'],
    //   // data: xAxisData,
    //   // nameGap: 0,
    //   nameTextStyle: {
    //     color: 'white'
    //   },
    //   axisTick: {
    //     show: false
    //   },
    //   axisLabel: {
    //     // interval: 0,
    //     // align: 'left',
    //     // margin: 40,
    //     color: 'white'
    //   },
    //   axisLine: {
    //     show: false
    //   }
    // },
    xAxis: {
      type: 'category',
      data: ['杨文辉', '余秋', '姜田', '陈晓成', '徐曼'],
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
        show: false,
        name: '',
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
      // {
      //   type: 'bar',
      //   name: '商品品类',
      //   // data: seriesData,
      //   data: [
      //     {
      //       name: '杨文辉',
      //       value: 680
      //     },
      //     {
      //       name: '余秋',
      //       value: 480
      //     },
      //     {
      //       name: '姜田',
      //       value: 1080
      //     },
      //     {
      //       name: '陈晓成',
      //       value: 180
      //     },
      //     {
      //       name: '徐曼',
      //       value: 880
      //     },
      //   ],
      //   itemStyle: {
      //     normal: {
      //       label: {
      //         show: true,
      //         position: 'right',
      //         color: 'white'
      //       },
      //       barBorderRadius: 5,
      //       color: '#00b8e2'
      //     }
      //   },
      //   barWidth: 10
      // },
      {
        type: 'pictorialBar',
        name: '商品品类',
        barCategoryGap: '-50%',
          // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        // data: seriesData,
        data: [
          {
            name: '杨文辉',
            value: 680
          },
          {
            name: '余秋',
            value: 480
          },
          {
            name: '姜田',
            value: 1080
          },
          {
            name: '陈晓成',
            value: 180
          },
          {
            name: '徐曼',
            value: 880
          },
        ],
        itemStyle: {
          normal: {
            // label: {
            //   show: true,
            //   color: 'white'
            // },
            color: '#00b8e2'
          }
        },
        // barWidth: 10
      },
    ],
    toolbox: {
      show: false
    }
  
  
  
  
  
    // color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'shadow'
    //   }
    // },
    // legend: {
    //   data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    // },
    // calculable: true,
    //   xAxis: {
    //   show: false
    // },
    // yAxis: {
    //   type: 'category',
    //   data: ['杨文辉', '余秋', '姜田', '陈晓成', '徐曼', '杨文辉', '余秋', '姜田', '陈晓成', '徐曼'],
    //   axisTick: {
    //     show: false
    //   },
    //   axisLabel: {
    //     interval: 0,
    //     align: 'left',
    //     margin: 50
    //   },
    //   axisLine: {
    //     show: false
    //   }
    // },
    // series: [
    //   {
    //     name: '',
    //     type: 'bar',
    //     barGap: 0,
    //     label: labelOption,
    //     data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390]
    //   },
    //   {
    //     name: '',
    //     type: 'bar',
    //     label: labelOption,
    //     data: [220, 182, 191, 234, 290, 320, 332, 301, 334, 390]
    //   }
    // ]
  
  }
  return <PictorialBar option={option}/>;
}, isEqual);

export default Bar_three;