import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DatePicker, Spin, Row, Col, Radio } from 'antd';
import PageContainer from '@/layouts/PageContainer';
import Block from '@/components/Block';
// import styles from './index.module.less';
import Map from './Map';
import axios from 'axios';
import echarts from 'echarts';
require('echarts/map/js/china');

const Visitors = ({

}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get('./hebei.json')
      .then(res => {
        const resultData = res.data;
        resultData.features.push(
          {
            type: 'Feature',
            properties: {
              id: '11',
              size: '5000',
              name: '北京市',
              cp: [116.4551, 40.2539],
              childNum: 19
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [117.4219, 40.21],
                  [117.334, 40.1221],
                  [117.2461, 40.0781],
                  [116.8066, 39.9902],
                  [116.8945, 39.8145],
                  [116.8945, 39.6826],
                  [116.8066, 39.5947],
                  [116.543, 39.5947],
                  [116.3672, 39.4629],
                  [116.1914, 39.5947],
                  [115.752, 39.5068],
                  [115.4883, 39.6387],
                  [115.4004, 39.9463],
                  [115.9277, 40.2539],
                  [115.752, 40.5615],
                  [116.1035, 40.6055],
                  [116.1914, 40.7813],
                  [116.4551, 40.7813],
                  [116.3672, 40.9131],
                  [116.6309, 41.0449],
                  [116.9824, 40.6934],
                  [117.4219, 40.6494],
                  [117.2461, 40.5176],
                  [117.4219, 40.21]
                ]
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              id: '12',
              size: '5000',
              name: '天津市',
              cp: [117.4219, 39.4189],
              childNum: 18
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [116.8066, 39.5947],
                  [116.8945, 39.6826],
                  [117.1582, 39.6387],
                  [117.1582, 39.8145],
                  [117.2461, 40.0781],
                  [117.334, 40.1221],
                  [117.4219, 40.21],
                  [117.6855, 40.0781],
                  [117.6855, 39.9902],
                  [117.5098, 39.9902],
                  [117.5098, 39.7705],
                  [117.6855, 39.5947],
                  [117.9492, 39.5947],
                  [117.8613, 39.4189],
                  [118.0371, 39.2432],
                  [118.0371, 39.1992],
                  [117.8613, 39.1113],
                  [117.5977, 38.6279],
                  [117.2461, 38.54],
                  [116.7188, 38.8037],
                  [116.7188, 38.9355],
                  [116.8945, 39.1113],
                  [116.8066, 39.5947]
                ]
              ]
            }
          }
        );
        echarts.registerMap('hebei', resultData);
      })
      .catch(error => {
        console.log(error);
      });
    setTimeout(() => {
      setData([
        {
          name: '北京市',
          value: 300,
          selected: true
        },
        {
          name: '天津市',
          value: 100,
          selected: true
        },
        {
          name: '张家口市',
          value: 50,
        },
        {
          name: '秦皇岛市',
          value: 11,
        },
        {
          name: '唐山市',
          value: 121,
        },
        {
          name: '承德市',
          value: 715,
        },
        {
          name: '保定市',
          value: 240,
        },
        {
          name: '廊坊市',
          value: 90,
        },
        {
          name: '石家庄市',
          value: 125,
        },
        {
          name: '衡水市',
          value: 251,
        },
        {
          name: '沧州市',
          value: 123,
        },
        {
          name: '邢台市',
          value: 500,
        },
        {
          name: '邯郸市',
          value: 25,
        },
      ])
    }, 2e3)
  }, []);
  return (
    <PageContainer title="地图">
      <Map data = {data} />
      可自定义增加/减少某个地区地图，如河北省不包含北京市和天津市，但是为了美观和统计，我们就需要加入这两个市。
    </PageContainer>
  );
};

const mapState = ({ visitors }) => ({

});

const mapDispatch = ({ visitors }) => ({

});

export default connect(
  mapState,
  mapDispatch
)(Visitors);
