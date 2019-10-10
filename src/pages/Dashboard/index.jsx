import React, { useEffect } from 'react';
import { Row, Col, Table, Tooltip } from 'antd';
import { connect } from 'react-redux';
import StatisticCard from '@/components/StatisticCard';
import PageContainer from '@/layouts/PageContainer';
import Block from '@/components/Block';
import CommomLine from '@/components/Commom/Line';
import Line from './Line';
import Bar from './Bar';
import Bar_two from './Bar_two';
import Bar_three from './Bar_three';

import uvIcon from '@/assets/images/uv.png';
import goodIcon from '@/assets/images/good.png';
import commentIcon from '@/assets/images/comments.png';
import shareIcon from '@/assets/images/share.png';

const { Column } = Table;

const Dashboard = ({

}) => {
  
  useEffect(() => {
  }, []); // []是依赖项，为空[]时可以实现componentDidmound效果，相当于class的三个生命周期，详细请看官网
  
  // const [aaa, setAaa] = useState(0);
  // const [bbb, setBbb] = useState({xxx,yyy,zzz});
  // 个人理解，class时，setState只需要书写{xxx: xxx},但是这已经是react帮我们对比做了，而如果我们只定义一个state，是可以，但是我们必须要写setBbb([...bbb,yyy: ''])
  // 但是如果一个页面，需要的state很多，那么这么做，肯定是对性能有影响的，因为这个时候，react会把bbb里面全部数据全到新对象里面再去assign类似的合并
  // 官网也建议 互无关联的写一个useState，并且做的很细，但是项目累计下来发现太细也不行，因为这样，太多了之后难以管理，所以我们是一个大类（比如下文里的row）一个useState

  const lineData = {
    xAxis_data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
      return item += '月';
    }),
    series: [
      {
        name: '点击数',
        type: 'line',
        data: [59, 51, 19, 102, 66, 20, 38, 81, 132, 41, 99, 68]
      },
      {
        name: '点击率',
        yAxisIndex: 1,
        type: 'line',
        data: [59, 51, 19, 102, 66, 20, 38, 81, 132, 41, 99, 68].map(item => {
          return (item / 8 ).toFixed(2);
        })
      }
    ],
    legend_Data: ['点击数', '点击率'],
    formatter: '{b}：<br/>{a0}: {c0} <br/> {a1}: {c1}%'
  };

  const barData = {
    xAxis_data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
      return item += '月';
    }),
    series: [
      {
        name: '点击数',
        type: 'line',
        data: [59, 51, 19, 102, 66, 20, 38, 81, 132, 41, 99, 68]
      },
      {
        name: '点赞数',
        type: 'bar',
        barWidth: '20%',
        data: [29, 151, 119, 12, 26, 70, 78, 21, 32, 41, 39, 28]
      },
      {
        name: '点击率',
        yAxisIndex: 1,
        type: 'line',
        data: [59, 51, 19, 102, 66, 20, 38, 81, 132, 41, 99, 68].map(item => {
          return (item / 8 ).toFixed(2);
        })
      }
    ],
    legend_Data: ['点击数', '点击率', '点赞数'],
    formatter: '{b}：<br/>{a0}: {c0} <br/> {a1}: {c1} <br/> {a2}: {c2}%'
  };

  return (
    <PageContainer title="折线图柱状图">
      <Row
        gutter={24}
        type="flex"
        style={{ flexFlow: 'row nowrap', padding: '8px 0' }}
        >      
        <Col>
          <StatisticCard title="点击量" value={888} icon={uvIcon} />
        </Col>
        <Col>
          <StatisticCard title="点赞数" value={999} icon={goodIcon} />
        </Col>
        <Col>
          <StatisticCard title="评论数" value={12321} icon={commentIcon} />
        </Col>
        <Col>
          <StatisticCard title="分享数" value={666} icon={shareIcon} />
        </Col>
      </Row>
      <Row gutter={10} type="flex" justify="start" className="mt_30">
        <Block title="折线图详解" bodyClassName="chart-content">
          <Line />
        </Block>
      </Row>
      <Row gutter={10} type="flex" justify="start" className="mt_30">
        <Block title="X轴柱状图详解" bodyClassName="chart-content">
          <Bar />
        </Block>
      </Row>
      <Row gutter={10} type="flex" justify="start" className="mt_30">
        <Block title="Y轴柱状图详解" bodyClassName="chart-content">
          <Bar_two />
        </Block>
      </Row>
      

      <Row gutter={10} type="flex" justify="start" className="mt_30">
        <Block title="双Y轴折线图" bodyClassName="chart-content">
          <CommomLine data = {lineData} />
        </Block>
      </Row>
        
      <Row gutter={10} type="flex" justify="start" className="mt_30">
        <Block title="双Y轴折线图+柱状图" bodyClassName="chart-content">
          <CommomLine data = {barData} />
        </Block>
      </Row>

      <Row gutter={10} type="flex" justify="start" className="mt_30">
        <Block title="象形柱图" bodyClassName="chart-content">
          <Bar_three />
        </Block>
      </Row>
    </PageContainer>
  );
};

const mapState = ({ dashboard, loading }) => ({

});

const mapDispatch = ({ dashboard }) => ({
  
});

export default connect(
  mapState,
  mapDispatch
)(Dashboard);
