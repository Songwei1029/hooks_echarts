import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import classNames from 'classnames';
import styles from './index.module.less';

const Block = ({
  title,
  style,
  className,
  loading = false,
  bodyClassName,
  bodyStyle,
  children
}) => (
  <div className={classNames(styles.block, className)} style={style}>
    {title && <div className={styles['block-title']}>{title}</div>}
    <div className={classNames(styles['block-body'], bodyClassName)} style={bodyStyle}>
      <Skeleton active loading={loading} paragraph={{ rows: 6 }}>
        {children}
      </Skeleton>
    </div>
  </div>
);

Block.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  loading: PropTypes.bool,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.object
};

export default Block;
