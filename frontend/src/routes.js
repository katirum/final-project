import { Navigate/* ,Outlet */ } from 'react-router-dom';
import { DashboardPage } from 'pages/DashboardPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactPage } from 'pages/ContactPage';
import { AboutPage } from 'pages/AboutPage';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <DashboardPage/> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
     /*  {
        path: 'member',
        element: <Outlet />,
        children: [
          { path: '/', element: <MemberGrid /> },
          { path: '/add', element: <AddMember /> },
        ],
      } */
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <LoginPage /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;