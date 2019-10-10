import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'antd';
import config from './typeConfig';
import styles from './index.module.less';

const Exception = ({
  className,
  backText,
  linkElement = 'a',
  type,
  title,
  desc,
  img,
  actions,
  redirect,
  ...rest
}) => {
  const pageType = type in config ? type : 404;
  const clsString = classNames(styles.exception, className);
  return (
    <div className={clsString} {...rest}>
      <div className={styles.imgBlock}>
        <div
          className={styles.imgEle}
          style={{ backgroundImage: `url(${img || config[pageType].img})` }}
        />
      </div>
      <div className={styles.content}>
        <h1>{title || config[pageType].title}</h1>
        <div className={styles.desc}>{desc || config[pageType].desc}</div>
        <div className={styles.actions}>
          {actions ||
            createElement(
              linkElement,
              {
                to: redirect,
                href: redirect
              },
              <Button type="primary">{backText}</Button>
            )}
        </div>
      </div>
    </div>
  );
};

Exception.propTypes = {
  className: PropTypes.string,
  backText: PropTypes.string,
  linkElement: PropTypes.any,
  type: PropTypes.oneOf(['403', '404', '500']),
  title: PropTypes.node,
  desc: PropTypes.node,
  img: PropTypes.string,
  actions: PropTypes.node,
  redirect: PropTypes.string
};

Exception.defaultProps = {
  backText: '回到首页',
  redirect: '/'
};

export default Exception;
