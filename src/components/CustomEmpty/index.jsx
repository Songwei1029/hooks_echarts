import React from 'react';
import { Empty } from 'antd';
import classNames from 'classnames';
import emptyIcon from '@/assets/images/empty.svg';
import styles from './index.module.less';

const CustomEmpty = ({ className, style, ...rest }) => {
  return (
    <Empty
      className={classNames(className, styles.empty)}
      style={style}
      image={emptyIcon}
      {...rest}
    />
  );
};

export default CustomEmpty;
