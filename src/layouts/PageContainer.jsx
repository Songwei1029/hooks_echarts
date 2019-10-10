import React, { Fragment } from 'react';
import { Card } from 'antd';

const PageContainer = ({ title, children, ...rest }) => {
  const props = {
    title,
    bordered: false,
    headStyle: {
      padding: '0 20px'
    },
    bodyStyle: {
      padding: '24px 20px'
    },
    ...rest
  };

  return (
    <Card {...props}>
      <Fragment>{children}</Fragment>
    </Card>
  );
};

export default PageContainer;
