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
        path: 'dashboard',
        element: <Dashboard />,
        name: '首页'
      },
    ],
  },
  {
    path: 'my',
    element: <Layout />,
    name: '个人中心',
    children: [
      {
        path: 'home',
        name: '个人中心',
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "page1",
            element: (<div> this is page 2</div>)
          }
        ]
      },
    ]
  }
];


function Router() {
  return useRoutes(routes)
}
export { routes, Router }