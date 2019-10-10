import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import CommomPie from '@/components/Charts/Pie';

const Pie = memo(() => {
  // const getDatas = useMemo(() => getData(data), [data]);
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)" // 显示格式，一般都是a（序列名，就是series里面的name）， b（数据名）， c（数据值），部分有些有d（百分比）如饼图
      // 写法就是 '{a} <br /> {b}'
    },
    toolbox: {},
    legend: {
      type: 'scroll', // 过宽 图列会出现滚动条 而不会影响布局了
      orient: 'horizontal',
      bottom: '3%',
      itemWidth: 10,
      left: '40%',
      data: [
        {
          'name': 'pc',       
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
          'name': 'java',
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
        {
          'name': 'app',
          textStyle: {
            color: 'black'
          }
        },
      ]
    },
    grid: {
      // left: '20%',
      // right: '1%',
      bottom: '10%'
    },
  
    series: [
      {
        name: '',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'], // 圆心的位置，分布是x轴和y轴，可以控制图形位置了
        // labelLine: { // 控制是否需要连线
        //   show: false
        // },
        // label: {
        //   show: false
        // },
        data: [
          {
            value: 335,
            name: 'pc',
            itemStyle: {
              color: '#008ee7'
            }
          },
          {
            value: 310,
            name: 'o2o',
            itemStyle: {
              color: '#04ae98'
            }
          },
          {
            value: 234,
            name: 'java',
            itemStyle: {
              color: '#7257dc'
            }
          },
          {
            value: 365,
            name: 'web',
            itemStyle: {
              color: '#d9da6d'
            }
          },
          {
            value: 348,
            name: 'app',
            itemStyle: {
              color: '#e5727b'
            }
          }
        ],
        // roseType: 'radius', // 控制弧半径 是否是值大小， 不设置弧半径都会一样大
      }
    ]
  };
  return <CommomPie option={option}/>;
}, isEqual);

export default Pie;