import React, { useEffect, useState } from 'react';
import PageContainer from '@/layouts/PageContainer';
import { Row, Col, DatePicker } from 'antd';
import { connect } from 'react-redux';
import Block from '@/components/Block';
import styles from './index.module.less';
import Pie from './Pie';
import Pie2 from './Pie2';
import {CommomDatePicker} from 'hooksplug';

const { RangePicker } = DatePicker;

const Policy = ({}) => {

  useEffect(() => {}, []);

  const onChange = e => {
    console.log(e)
  };

  return (
    <PageContainer title="饼图">
      <section>
        <Pie />
      </section>
      <section>
        {/* <Tree /> */}
        <Row gutter={10} type="flex" justify="start" className="mt_30">
          <Block title="时间选择" bodyClassName="chart-content" >
            <div className={styles['block']}>
              <CommomDatePicker  disabledInterval = {[7, 30]} onChange = {onChange}  />
              根据选择的第一个时间锚点来禁选前后的时间(已默认禁选今天之后的日期)          
            </div>
              <Pie2 />
          </Block>
        </Row>
      </section>
    </PageContainer>
  );
};

const mapState = ({ policy, loading }) => ({

});

const mapDispatch = ({ policy }) => ({

});

export default connect(
  mapState,
  mapDispatch
)(Policy);
