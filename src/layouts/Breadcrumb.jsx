import React, { memo, useMemo } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { isEqual, urlToList } from '@/utils';
import { routeMap } from '@/constants/config';

const getBreadcrumbMap = routes => {
  return routes.reduce((acc, cur) => {
    if (cur.type === 'category' && cur.children.length) {
      acc[cur.key] = cur.title;
      acc = Object.assign({}, acc, { ...getBreadcrumbMap(cur.children) });
    } else {
      acc[cur.key] = cur.title;
    }
    return acc;
  }, {});
};

const BreadcrumbComp = memo(({ pathname }) => {
  const pathSnippets = useMemo(() => urlToList(pathname), [pathname]);
  const breadcrumbMap = useMemo(() => getBreadcrumbMap(routeMap), [routeMap]);
  const extraBreadcrumbItems = pathSnippets.map((url, index) => {
    const isLinkable = index !== pathSnippets.length - 1;
    const breadcrumbName = breadcrumbMap[url];
    return breadcrumbName ? (
      <Breadcrumb.Item key={url}>
        {isLinkable ? <Link to={url}>{breadcrumbName}</Link> : <span>{breadcrumbName}</span>}
      </Breadcrumb.Item>
    ) : null;
  });

  return (
    <Breadcrumb style={{ lineHeight: '40px', margin: '0 15px' }}>{extraBreadcrumbItems}</Breadcrumb>
  );
}, isEqual);

export default BreadcrumbComp;
