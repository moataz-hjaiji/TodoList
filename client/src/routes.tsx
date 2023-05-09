import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoadingScreen from './components/Loading';

interface CustomRouteProps {
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

// const routes = [
// {
//   exact: true,
//   path: '/404',
//   component: () => <Redirect to="/" />,
// },
// {
//   exact: true,
//   guard: GuestGuard,
//   path: '/login',
//   component: lazy(() => import('./pages/Auth/LoginView')),
// },
// {
//   exact: true,
//   guard: RoutesGuard,
//   path: '/Routes',
//   component: lazy(() => import('./pages/Auth/Routes')),
// },
// {
//   path: '/',
//   guard: AuthGuard,
//   layout: DashboardLayout,
//   routes: [
//     {
//       exact: true,
//       path: '/',
//       component: lazy(() => import('./pages/Test')),
//     },
//     {
//       path: '*',
//       component: lazy(() => import('./pages/Auth/NotFound')),
//     },
//   ],
// },
//];
const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '/signup',
    exact: true,
    component: lazy(() => import('./pages/Auth/Signup')),
  },
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('./pages/Auth/Login')),
  },
  {
    path: '/404NOTFOUND',
    exact: true,
    component: lazy(() => import('./pages/NOTFOUND')),
  },
  {
    path: '*',
    component: lazy(() => import('./pages/NOTFOUND')),
  },
];
export default routes;
