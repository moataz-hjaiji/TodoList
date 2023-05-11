import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { GuestGuard, AuthGuard } from './layouts/guards';
import Dashboard from './layouts/Dashboard';
import Redirect from './components/Redirect';
import LoadingScreen from './components/Loading';

export interface CustomRouteProps {
  guard?: string;
  layout?: string;
  exact?: boolean;
  component: React.ComponentType<any>;
  path?: string;
  routes?: CustomRouteProps[];
}

export const renderRoutes = (routes: CustomRouteProps[] = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route: CustomRouteProps, i: number) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>
                  {route.routes ? renderRoutes(route.routes) : <Component />}
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  {
    exact: true,
    path: '/404',
    layout: Dashboard,
    component: () => <Redirect to="/" />,
  },
  {
    exact: true,
    path: '/',
    layout: Dashboard,
    guard: AuthGuard,
    component: lazy(() => import('./pages/Home')),
  },
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('./pages/Auth/Login')),
  },
  {
    exact: true,
    path: '/signup',
    component: lazy(() => import('./pages/Auth/Signup')),
  },
  // {
  //   path: '*',
  //   guard: GuestGuard,
  //   //component: lazy(() => import('./pages/Auth/NotFound')),
  // },
];

export default routes;
