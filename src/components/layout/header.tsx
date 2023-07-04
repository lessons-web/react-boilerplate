import { useState, useEffect } from "react";

import {
  Row,
  Col,
  Breadcrumb,
  Button,
  Avatar,
  Input,
  Drawer,
  Typography,
  Switch,
} from "antd";

import {
  SearchOutlined,
  TwitterOutlined,
  FacebookFilled,
} from "@ant-design/icons";

import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { useSnapshot } from "valtio";

import appStore from "@/stores/app";
import userStore from "@/stores/user";

const { Title, Text } = Typography;

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #1890ff;
  }
  .ant-btn-success {
    background-color: #52c41a;
  }
  .ant-btn-yellow {
    background-color: #fadb14;
  }
  .ant-btn-alert {
    background-color: #d9363e;
  }
  .ant-btn-black {
    background-color: #262626;
    color: #fff;
    border: 0px;
    border-radius: 5px;
  }
  .ant-switch-active {
    background-color: #1890ff;
  }
`;

const profile = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
    ></path>
  </svg>,
];

const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];

const setting = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
      fill="#111827"
    ></path>
  </svg>,
];

function Header({
  placement,
  name,
  onPress,
  handleSidenavColor,
  handleSidenavType,
  handleFixedNavbar,
}: any) {
  const snap = useSnapshot(appStore);
  const { user } = useSnapshot(userStore);
  const [visible, setVisible] = useState(false);
  const [sidenavType, setSidenavType] = useState("white");

  useEffect(() => window.scrollTo(0, 0));

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  return (
    <>
      <div className="setting-drwer" onClick={showDrawer}>
        {setting}
      </div>
      <Row gutter={[12, 0]}>
        <Col span={24} md={6} style={{ display: 'flex', alignItems: 'center' }}>
          <Breadcrumb
            items={[
              {
                title: <NavLink to="/">{snap.title}</NavLink>,
              },
              {
                title: name.replace("/", "").replace(/(^\w{1})|(\s+\w{1})/g, (char: string) => char.toUpperCase()),
              },
            ]}
          />
        </Col>
        <Col span={24} md={18} className="header-control">
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
          <Drawer
            title="Configurator"
            className="settings-drawer"
            mask={true}
            width={420}
            onClose={hideDrawer}
            placement={placement}
            open={visible}
          >
            <section>
              <div className="sidebar-color">
                <Title level={5}>Sidebar Color</Title>
                <div className="theme-color mb-2">
                  <ButtonContainer>
                    <Button
                      type="primary"
                      onClick={() => handleSidenavColor("#1890ff")}
                    >
                      {''}
                    </Button>
                    <Button
                      // @ts-ignore
                      type="success"
                      onClick={() => handleSidenavColor("#52c41a")}
                    >
                      {''}
                    </Button>
                    <Button
                      // @ts-ignore
                      type="alert"
                      onClick={() => handleSidenavColor("#d9363e")}
                    >
                      {''}
                    </Button>
                    <Button
                      // @ts-ignore
                      type="yellow"
                      onClick={() => handleSidenavColor("#fadb14")}
                    >
                      {''}
                    </Button>

                    <Button
                      // @ts-ignore 
                      type="black"
                      onClick={() => handleSidenavColor("#111")}
                    >
                      {''}
                    </Button>
                  </ButtonContainer>
                </div>

                <div className="sidebarnav-color mb-2">
                  <Title level={5}>Sidenav Type</Title>
                  <Text>Choose between 2 different sidenav types.</Text>
                  <ButtonContainer className="trans">
                    <Button
                      // @ts-ignore
                      type={sidenavType === "white" ? "primary" : "white"}
                      onClick={() => {
                        handleSidenavType("#fff");
                        setSidenavType("white");
                      }}
                    >
                      WHITE
                    </Button>
                    <Button
                      // @ts-ignore
                      type={sidenavType === "transparent" ? "primary" : "white"}
                      onClick={() => {
                        handleSidenavType("transparent");
                        setSidenavType("transparent");
                      }}
                    >
                      TRANSPARENT
                    </Button>
                  </ButtonContainer>
                </div>
                <div className="fixed-nav mb-2">
                  <Title level={5}>Navbar Fixed</Title>
                  <Switch onChange={(e) => handleFixedNavbar(e)} />
                </div>
                <div className="ant-docment">
                  <ButtonContainer>
                    <Button
                      // @ts-ignore
                      type="black"
                    >
                      FREE DOWNLOAD
                    </Button>
                    <Button>VIEW DOCUMENTATION</Button>
                  </ButtonContainer>
                </div>
                <div className="ant-thank">
                  <Title level={5} className="mb-2">
                    Thank you for sharing!
                  </Title>
                  <ButtonContainer className="social">
                    <Button
                      // @ts-ignore
                      type="primary"
                    >{<TwitterOutlined />}TWEET</Button>
                    <Button
                      // @ts-ignore
                      type="black"
                    >{<FacebookFilled />}SHARE</Button>
                  </ButtonContainer>
                </div>
              </div>
            </section>
          </Drawer>
          {
            !user?.id ? (
              <Link to="/signin" className="btn-sign-in">
                {profile}
                <span>Sign in</span>
              </Link>
            ) : (
              <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00', marginLeft: 10 }}>{(user as any).name[0]}</Avatar>
            )
          }
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
