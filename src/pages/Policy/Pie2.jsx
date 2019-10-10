import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import Pie from '@/components/Charts/Pie';

const NewVisitorEcharts = memo(({ className, data, loading, style }) => {
  // const newData = data.slice(0, data.indexOf('%'));
  // const oldData = 100 - newData;
  // console.log(oldData);
  // useMemo(() => {}, [data]);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    toolbox: {},
    series: [
      {
        name: '访客',
        type: 'pie',
        radius: ['55%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: 'NEW',
            color: '#1284ed91',
            fontWeight: '400',
            fontSize: '18'
          }
          // emphasis: {
          //   show: true,
          //   textStyle: {
          //     fontSize: '30',
          //     fontWeight: 'bold'
          //   }
          // }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 78.21,
            name: '',
            itemStyle: {
              color: '#1284ed91'
            }
          },
          {
            value: 21.79,
            name: '',
            itemStyle: {
              color: '#00b4ff24'
            }
          }
        ]
      }
    ]
  };

  return <Pie option={option} style={style} />;
}, isEqual);

export default NewVisitorEcharts;
