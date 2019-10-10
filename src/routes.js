import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from '@/components/Loadable';

const NotFound = Loadable(() => import('@/pages/Exception/404'));
const LineAndBar = Loadable(() => import('@/pages/Dashboard/LineAndBar'));
const PictorialBar = Loadable(() => import('@/pages/Dashboard/PictorialBar'));
const Policy = Loadable(() => import('@/pages/Policy'));
const Relation = Loadable(() => import('@/pages/Relation'));
const Map = Loadable(() => import('@/pages/Map'));

export default () => (
  <Switch>
    <Route exact path="/dashboard/lineAndBar" component={LineAndBar} />
    <Route exact path="/dashboard/pictorialBar" component={PictorialBar} />
    <Route exact path="/policy" component={Policy} />
    <Route exact path="/relation" component={Relation} />
    <Route exact path="/map" component={Map} />
    <Redirect exact from="/" to="/relation" />
    <Redirect exact from="/dashboard" to="/dashboard/lineAndBar" />
    <Route component={NotFound} />
  </Switch>
);
