import routes, { CustomRouteProps, renderRoutes } from './routes';
import Main from './layouts/Main';
import { AuthProvider } from './contexts/JWTAuthContext';

function App() {
  console.log(routes);
  return (
    <AuthProvider>
      <Main>{renderRoutes(routes as CustomRouteProps[])}</Main>
    </AuthProvider>
  );
}

export default App;
