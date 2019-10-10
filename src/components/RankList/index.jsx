import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Skeleton } from 'antd';
import styles from './index.module.less';
import CustomEmpty from '@/components/CustomEmpty';
import classNames from 'classnames';

const skeletonProps = {
  active: true,
  avatar: true,
  paragraph: {
    rows: 0
  },
  title: {
    width: '100%'
  }
};

const RankList = ({ list, loading, renderItem, itemKeyMap }) => {
  return (
    <div className={styles['rank-list']}>
      {loading ? (
        <div className={styles['loading-wrapper']}>
          <Skeleton {...skeletonProps} />
          <Skeleton {...skeletonProps} />
          <Skeleton {...skeletonProps} />
          <Skeleton {...skeletonProps} />
          <Skeleton {...skeletonProps} />
        </div>
      ) : (
        <Fragment>
          {Array.isArray(list) && list.length > 0 ? (
            list.map((item, index) => (
              <div className={styles['rank-item']} key={index}>
                <div
                  className={classNames(styles['rank-item-sort'], {
                    [styles['rank-item-1st']]: index === 0,
                    [styles['rank-item-2nd']]: index === 1,
                    [styles['rank-item-3rd']]: index === 2
                  })}
                >
                  {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                </div>
                <div className={styles['rank-item-content']}>
                  <div className={styles['rank-item-content-left']}>
                    {item.picurl && item.picurl.length > 0 ? (
                      <img className={styles['rank-item-avatar']} src={item.picurl} alt="avatar" />
                    ) : (
                      <Avatar size={56} icon="user" />
                    )}
                    <span className={styles['rank-item-name']}>
                      {item.name && item.name.length > 0 ? item.name : '未命名'}
                    </span>
                  </div>
                  <div className={styles['rank-item-content-right']}>{renderItem(item, index)}</div>
                </div>
              </div>
            ))
          ) : (
            <CustomEmpty style={{ margin: '50px 0' }} />
          )}
        </Fragment>
      )}
    </div>
  );
};

RankList.propTypes = {
  list: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
};

export default RankList;
