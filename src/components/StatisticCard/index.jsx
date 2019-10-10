import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from 'antd';
import styles from './index.module.less';
import classNames from 'classnames';

const StatisticCard = ({
  icon,
  iconFontType,
  iconFontValue = '',
  iconShape = 'circle',
  iconSize = 66,
  value,
  title,
  style,
  className,
  valueStyle
}) => {
  return (
    <div className={classNames(styles['statistic-card'], className)} style={style}>
      {icon && (
        <img
          style={{ width: iconSize, height: iconSize }}
          className={classNames(styles['statistic-card-icon'], {
            [styles['statistic-card-icon-suqare']]: iconShape === 'square'
          })}
          src={icon}
          alt="card-img"
        />
      )}
      <div className={styles['statistic-card-wrap']}>
        <div className={styles['statistic-card-content']} style={valueStyle}>
          {value}
        </div>
        <div className={styles['statistic-card-title']}>
          {title}{' '}
          {iconFontType && (
            <Tooltip title={iconFontValue}>
              <Icon type={iconFontType} style={{ color: 'blue' }} />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

StatisticCard.propTypes = {
  icon: PropTypes.string,
  iconFontType: PropTypes.string,
  iconFontValue: PropTypes.string,
  iconShape: PropTypes.oneOf(['circle', 'square']),
  iconSize: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  valueStyle: PropTypes.object
};

export default StatisticCard;
