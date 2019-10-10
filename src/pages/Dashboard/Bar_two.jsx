import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import CommomBar from '@/components/Charts/Bar';

const Bar_two = memo(() => {
  // const getDatas = useMemo(() => getData(data), [data]);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        let res = params[1].name+'：<br/>';
        let myseries = option.series; // 这儿是定义的这个对象名字，在这是option
        for (let i = 0; i < params.length; i++) {
            for(let j = 0;j< myseries[0].data.length; j++){
                if(myseries[i].data[j].name === params[i].name){
                  if ( i === 0 ) {
                    res+= myseries[i].name + ' : '+ myseries[i].data[j].value+'</br>';
                  } else {
                    res+= '占比 : '+ ((myseries[i].data[j].value / option.series[1].sum) * 100).toFixed(2) + '%' +'</br>'; // 这儿是定义的这个对象名字，在这是option
                  }
                }
            }
        }
        return res;
      }
    },
    grid: {
      left: '2%',
      right: '8%',
      bottom: 0,
      top: '8%',
      containLabel: true,
    },
    legend: {
      data: [{
        'name': '商品销量',
        textStyle: {
          color: 'black'
        }
      }, {
        'name': '占比',
        textStyle: {
          color: 'black'
        }
      }],
      right: '1%',
      top: '0%',
      itemHeight: 6,
      itemWidth: 15,
      itemGap: 30
    },
    xAxis: {
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['北京', '上海', '广州', '深圳市直辖区', '成都'],
      nameTextStyle: {
        color: 'black'
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: value => {
          if (value.length > 4) {
            return `{a|${value.slice(0, 4)}}...`;
          } else {
            return `{a|${value}}`;
          }
        },
        rich: {
          a: {
            fontSize: 14
          }
        }
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        type: 'bar',
        name: '商品销量',
        data:[
          {
            name: '北京',
            value: 567
          },
          {
            name: '上海',
            value: 671
          },
          {
            name: '广州',
            value: 375
          },
          {
            name: '深圳市直辖区',
            value: 872
          },
          {
            name: '成都',
            value: 378
            },
        ],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'right',
              color: 'black'
            },
            barBorderRadius: 5,
            color: '#00b8e2'
          }
        },
        barWidth: 8
      },
      {
        type: 'bar',
        name: '占比',
        barGap: '40%',
        barCategoryGap: '60%',
        data:[
          {
            name: '北京',
            value: 767
          },
          {
            name: '上海',
            value: 171
          },
          {
            name: '广州',
            value: 275
          },
          {
            name: '深圳市直辖区',
            value: 572
          },
          {
            name: '成都',
            value: 178
            },
        ],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'right',
              color: 'black',
              formatter: params => {
                let res = params.value;
                let sum = option.series[1].sum; // 这儿是定义的这个对象名字，在这是option
                return ((res / sum) * 100).toFixed(2) + '%';
              }
            },
            barBorderRadius: 5,
            color: '#0b78e5'
          }
        },
        barWidth: 8,
        sum: 1000 // 自定义的一个值，总值用来算占比的
      },
    ],
    toolbox: {
      show: false
    }
  };
  return <CommomBar option={option}/>;
}, isEqual);

export default Bar_two;