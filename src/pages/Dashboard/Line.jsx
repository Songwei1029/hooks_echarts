import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import CommomLine from '@/components/Charts/Bar';

const Line = memo(() => {
  // const getDatas = useMemo(() => getData(data), [data]);
  const option = {
    tooltip: { // 鼠标悬浮时提示框 
      trigger: 'axis',
      confine: true
    },
    toolbox: {}, // 工具栏 可以设置部分 不好看可以设置为空
    legend: { // 图例，也就是不同系列的标记/也就是显示有几个系列
      data: [{ // 图例数据源，需要注意的是name要和series系列中的name一致，否则不会显示
        'name': '石家庄',
        textStyle: { // 控制图列颜色等等
          color: 'green'
        }
      }, {
        'name': '全省',
        textStyle: {
          color: '#00b0a7'
        }
      }],
      formatter: '{name}', // formatter都是格式，一般来说，都支持字符串和回调函数，嵌套太深调formatter不支持回调（具体哪个暂时忘了）
      top: '8%',
      right: '4%',
  
    },
    grid: { // 可以理解为在这设置 图形在绘画出来的canvas中的位置，一般就是拿来设置上下左右位置方便布局
      left: '4%',
      right: '4%',
      bottom: '5%',
      top: '24%',
      containLabel: true // 需要让这个为true
    },
    xAxis: [ // 我们理解调x轴设置
      {
        type: 'category', // 设置这个type就是类目轴，就是显示下面data里面【1点，2点，...】的类目数据
        data: ['1点', '2点',  '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点', '11点', '12点'],
        axisTick: {
          show: false
        }, // 这两句是让x轴的轴线和刻度不显示
        axisLine: {
          show: false
        },
        axisLabel: { // label的控制
          color: 'black'
        }
      }
    ],
    yAxis: [
      {
        type: 'value', // type为value，就是显示series中data对应的数据，默认会自动设置1个刻度的大小和坐标轴的分割段数为5
        axisTick: {
          show: false
        }, // 轴线和刻度不显示
        axisLine: {
          show: false
        },
        axisLabel: { // label的控制
          color: 'black'
        },
        // splitNumber: 5, //默认的坐标轴的分割段数为5，只是个预估值，
        // min: 20, // 强行控制坐标轴的最小起始点
        // max: 2000 // 强行控制坐标轴的最大起始点
  
      }
    ],
    series: [
      {
        name: '石家庄',
        type: 'line',
        data: [100, 242,421,231,542,624,624,656,744,144,614,973],
        color: '#00b8e2' // 控制线颜色和图例线颜色
      },
      {
        name: '全省',
        type: 'line',
        data: [250, 180, 180, 420, 240, 580, 260, 140, 580, 420, 240, 580],
        color: '#0b78e5',
        areaStyle: { // 会把数值形成区域用制定颜色绘画出来
          color: '#00b0a7'
        }
      }
    ]
  };
  return <CommomLine option={option}/>;
}, isEqual);

export default Line;