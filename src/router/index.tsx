import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import My from '../views/My/index';
import Layout from '../layout/index';
import { useRoutes } from 'react-router-dom';
import Home from '../views/Home';


const routes = [
  {
    path: '/',
    element: <Layout />,
    name: '主页',
    children: [
      {
        path: '/dashboard', element: <Dashboard />,
        name: '首页'
      },
    ],
  },
  {
    path: '',
    element: <Layout />,
    name: '个人中心',
    children: [
      {
        path: 'my',

        name: '个人中心',
        children: [
          {
            path: 'home',
            children: [
              {
                path: "page1",
                element: (<div> this is page 2</div>)
              }
            ]
          },
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
];


function Router() {
  return useRoutes(routes)
}
export { routes, Router }