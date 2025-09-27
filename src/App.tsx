
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import NotFound from './pages/404';
import Properties from './pages/Properties/Properties';
import PropertyDetail from './pages/Properties/PropertyDetail';
import Agent from './pages/Agent';
import AgentDetail from './pages/AgentDetail';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/contact', element: <Contact /> },
      { path: '/property', element: <Properties /> },
      { path: '/property/:id', element: <PropertyDetail /> },
      { path: '/agent', element: <Agent /> },
      { path: '/agent/:id', element: <AgentDetail /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/',
    // keep root redirecting to Home via Layout/index; this route can remain but it's redundant
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;