import React, { useState, useMemo, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { routeMap } from '@/constants/config';
import { getNavMenuItems, getSubMenuKeys, getKeys, getMenuMatchKeys } from './utils';
import { urlToList } from '@/utils';
import styles from './index.module.less';

const { Sider } = Layout;

const initialState = {
  openKeys: [],
  pathname: '',
  collapsed: false
};

const SiderMenu = ({ pathname }) => {
  const [state, setState] = useState(initialState);
  const menuItems = useMemo(() => getNavMenuItems(routeMap, pathname), [routeMap, pathname]);
  const subMenuKeys = useMemo(() => getSubMenuKeys(routeMap), [routeMap]);
  const flatMenuKeys = useMemo(() => getKeys(routeMap), [routeMap]);
  const urlList = useMemo(() => urlToList(pathname), [pathname]);
  const selectedKeys = useMemo(() => getMenuMatchKeys(flatMenuKeys, urlList), [flatMenuKeys, urlList]);

  useEffect(() => {
    if (pathname !== state.pathname) {
      setState(prevState => ({
        ...prevState,
        pathname,
        openKeys: selectedKeys
      }));
    }
  }, [pathname]);

  const handleCollapsed = (collapsed) => {
    setState(prevState=> ({
      ...prevState,
      collapsed,
      openKeys: !collapsed ? urlList : prevState.openKeys
    }));
  };

  const handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !state.openKeys.includes(key));
    if (!subMenuKeys.includes(latestOpenKey)) {
      setState(prevState => ({
        ...prevState,
        openKeys
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        openKeys: latestOpenKey ? [latestOpenKey] : []
      }));
    }
  };

  return (
    <Sider
      width={200}
      className={styles.sider}
      theme="light"
      collapsible
      collapsed={state.collapsed}
      onCollapse={handleCollapsed}
    >
      <Link to="/dashboard" replace={pathname === '/dashboard'}>
        <h1 className={styles.logo}>
          hooks中使用可视化
        </h1>
      </Link>
      <Menu
        mode="inline"
        theme="light"
        openKeys={state.openKeys}
        onOpenChange={handleOpenChange}
        selectedKeys={selectedKeys}
      >
        {menuItems}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
