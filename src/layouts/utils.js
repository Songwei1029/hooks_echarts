import React, { Fragment } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import pathToRegExp from 'path-to-regexp';

const { SubMenu } = Menu;

// 获取icon
function getIcon(icon) {
  if (typeof icon === 'string') {
    if (icon.includes('http')) {
      return <img width="14" height="14" className="mr_10" src={icon} alt="icon" />
    }
    return <Icon type={icon} />;
  }
}

function getMenuItemPath(item, pathname) {
  if (/^https?:\/\//.test(item.key)) {
    return (
      <a href={item.key} target={item.target}>
        {item.icon && getIcon(item.icon)}
        <span>{item.title}</span>
      </a>
    );
  }
  return (
    <Link to={item.key} target={item.target} replace={item.key === pathname}>
      {item.icon && getIcon(item.icon)}
      <span>{item.title}</span>
    </Link>
  );
}

// 获取MenuItem 或 SubMenu
function getSubMenuOrItem(item, pathname) {
  if (item.type === 'category' && item.children.length) {
    const childItems = getNavMenuItems(item.children, pathname);
    // 当无子菜单时就不展示submenu
    if (childItems.length) {
      return (
        <SubMenu
          title={
            <Fragment>
              {item.icon && getIcon(item.icon)}
              <span>{item.title}</span>
            </Fragment>
          }
          key={item.key}
        >
          {childItems}
        </SubMenu>
      );
    }
    // 将submenu当作menuitem显示，只是会展示404
    return (
      <Menu.Item
        key={item.key}
      >
        {getMenuItemPath(item, pathname)}
      </Menu.Item>
    );
  } else {
    return (
      <Menu.Item
        key={item.key}
      >
        {getMenuItemPath(item, pathname)}
      </Menu.Item>
    );
  }
}

// 获取菜单数据
export function getNavMenuItems(menuData, pathname) {
  if (Array.isArray(menuData)) {
    return menuData
    // 将不在菜单显示的项过滤掉
    .filter(item => !item.hideInMenu)
    .map(item => getSubMenuOrItem(item, pathname))
  }
  return [];
}

// 获取submenukeys
export function getSubMenuKeys(menuData) {
  return Array.isArray(menuData) ? menuData.reduce((acc, cur) => {
    if (cur.type === 'category') {
      acc.push(cur.key);
    }
    return acc;
  }, []) : [];
}

// 获取所有keys
export function getKeys(menuData) {
  return Array.isArray(menuData) ? menuData.reduce((acc, cur) => {
    if (cur.type === 'category') {
      acc.push(cur.key)
      if (cur.children.length) {
        acc = acc.concat(getKeys(cur.children));
      }
    } else {
      acc.push(cur.key);
    }
    return acc;
  }, []) : [];
}

/**
 * 根据路径找到所有匹配的menu keys
 * @param flatMenuKeys [/abc, /abc/:id, /abc/:id/info]
 * @param paths [/abc, /abc/11, /abc/11/info]
 */
export function getMenuMatchKeys(flatMenuKeys, paths) {
  return paths.reduce((matchKeys, path) => {
    return matchKeys.concat(
      flatMenuKeys.filter(item => {
        return pathToRegExp(item).test(path);
      })
    );
  }, []);
}
