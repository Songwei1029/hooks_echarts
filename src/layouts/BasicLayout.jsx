import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import SiderMenu from './SiderMenu';
import Breadcrumb from './Breadcrumb';
import Router from '@/routes';
import { getCookie } from '@/utils/cookie';

const { Content } = Layout;

const BasicLayout = ({ history }) => {
  const { pathname } = history.location;
  return (
    <Layout hasSider style={{ height: '100vh' }}>
      <SiderMenu pathname={pathname} />
      <Layout style={{ minHeight: '100vh', overflowX: 'scroll' }}>
        <Breadcrumb pathname={pathname} />
        <Content style={{ margin: '0 15px', minWidth: 1000 }}>
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(BasicLayout);
