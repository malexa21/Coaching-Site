import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom"; // Assuming you're using React Router
import Title from "antd/es/typography/Title";

import { Layout, Space, Menu, } from "antd";
const { Header } = Layout;

const MENU_ITEMS = [
  {
    key: "homepage",
    label: "HOMEPAGE",
  },
];

export const MenuView = () => {
  // gets the current URL
  const location = useLocation();
  // navigate is a special object that can change the page
  const navigate = useNavigate();
  // indicates the current tab
  const [currentKey, setCurrentKey] = useState();

  useEffect(() => {
    const url = location.pathname;
    setCurrentKey(url.split("/")[1]);
  }, [location.pathname]);

  const handleMenuClick = (event) => {
    const targetPage = event.key;
    navigate(`/${targetPage}`);
  };

  return (
    <Space
      direction="horizontal"
      style={{ width: "100%", display: "flex"}}
      size={[0, 48]}
    >
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor: "#001529", display: "flex", justifyContent: "space-between", alignItems: "center" }} align="center">
          <Space direction="horizontal" align="center">
            <Title level={3}  direction="horizontal" align="center" style={{ color: "white" , display: "flex", justifyContent: "center"}}>
              Coaching Site
            </Title>
            <Menu
              align="horizontal"
              theme="dark"
              selectedKeys={[currentKey]}
              onClick={handleMenuClick}
              items={MENU_ITEMS}
            />
          </Space>
        </Header>
        <Space direction="vertical" style={{ marginTop: 64 }}/>
        <Outlet />
      </Layout>
    </Space>
  );
};