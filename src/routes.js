import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from '@/components/Loadable';

const NotFound = Loadable(() => import('@/pages/Exception/404'));
const Dashboard = Loadable(() => import('@/pages/Dashboard'));
const Policy = Loadable(() => import('@/pages/Policy'));
const Relation = Loadable(() => import('@/pages/Relation'));
const Map = Loadable(() => import('@/pages/Map'));

export default () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/policy" component={Policy} />
    <Route exact path="/relation" component={Relation} />
    <Route exact path="/map" component={Map} />
    <Redirect exact from="/" to="/dashboard" />
    <Route component={NotFound} />
  </Switch>
);
