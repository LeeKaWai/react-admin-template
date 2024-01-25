import { Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items: any = [
  {
    label: '面板',
    key: 'dashboard'
  },
  {
    label: '用户中心',
    children: [
      {
        label: '用户主页',
        key: 'home'
      },
      {
        label: (<Link to="/my/home/page1">page1</Link>),
        key: 'page1'
      }
    ]
  }
];


const Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  debugger;
  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />

        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: 'calc(100vh - 112px)',
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;