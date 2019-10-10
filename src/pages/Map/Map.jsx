import React, { memo, useMemo } from 'react';
import { isEqual } from '@/utils';
import { default as MapChart } from '@/components/Charts/Map';
require('echarts/map/js/china');

const Map = memo(({ loading, isRing = true, className, data=[] }) => {
  // const { seriesData, maxNum } = useMemo(() => getSeriesdata(datas, selectName), [
  //   datas,
  //   selectName
  // ]);
  const options = {
    animation: false,
    geo: {
      zoom: 1.2,
      map: 'hebei'
    },
    visualMap: {
      type: 'continuous',
      seriesIndex: [0],
      min: 0,
      max: 715,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      itemWidth: 13,
      itemHeight: 70,
      color: ['#91b3ca', '#008edf', '#004baf'],
      left: '10%',
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      containLabel: true
    },
    series: [
      {
        mapType: 'hebei',
        type: 'map',
        zoom: 1.2,
        symbolSize: 20,
        selectedMode: true,
        symbol:
          'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
        itemStyle: {
          normal: {
            areaColor: '#197fe6',
            borderColor: '#0ac3dd',
            borderWidth: 4
          },
          emphasis: {
            areaColor: '#ee6539'
          }
        },
        label: {
          normal: {
            formatter: parmas => {
              let res = parmas.name + '\n';
              res += parmas.value;
              return res;
            },
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        // data: seriesData,
        data: data,
        // markPoint: {
        //   symbol: '@/assets/img/newStyle/mapIcon.png'
        // }
        // data: geoData
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        selectedMode: true,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          },
          formatter: '{b}:{c}'
        },
        symbolSize: 20,
        symbol:
          'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
        showEffectOn: 'render',
        itemStyle: {
          normal: {
            color: '#ff634d',
            borderColor: '#fff',
            borderWidth: 5
          }
        },
        data: data,
        // data: seriesData
      }
    ]
  };
  return <MapChart className={className} option={options} loading={loading} />;
}, isEqual);

export default Map;
