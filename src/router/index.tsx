import Home from '../views/Home';
import Login from '../views/Login';
import My from '../views/My/index';
import Layout from '../layout/index';
import { Navigate, useRoutes } from 'react-router-dom';


const baseRouter = [
    {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Navigate to="/404" />
      },
      {
        path: '/404',
        element: <div>404 page</div>
      },
]
const syncRouter = [
  {
    path: '/',
    element: <Layout />,
    children: [
    
    ],
  },
];


export default function Router(){
    return useRoutes(router)
}
