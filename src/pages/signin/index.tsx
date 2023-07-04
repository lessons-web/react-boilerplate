import { Component } from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  message,
} from "antd";

import { Link, useNavigate } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import userStore from "@/stores/user";
import { isDev } from "@/utils";
import Api from "@/utils/api";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const template = [
  <svg
    key="template"
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const profile = [
  <svg
    key="profile"
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const signup = [
  <svg
    key="signup"
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
export default function Signin() {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    console.log(import.meta.env.VITE_MOCK_USER_EMAIL, import.meta.env.VITE_MOCK_USER_PASSWORD);
    if (values.email === import.meta.env.VITE_MOCK_USER_EMAIL && values.password === import.meta.env.VITE_MOCK_USER_PASSWORD) {
      // 账号密码验证通过
      const user = await Api.users.detail(1);
      userStore.login(user);
      message.success('Login success', .5, () => {
        navigate('/dashboard');
      });
      return;
    }
    message.error('Invalid email or password');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="layout-default ant-layout layout-sign-in">
        <Header>
          <div className="header-col header-brand">
            <h2>RBT React Boilerplate</h2>
          </div>
          <div className="header-col header-nav">
            <Menu mode="horizontal" defaultSelectedKeys={["dashboard"]}>
              <Menu.Item key="dashboard">
                <Link to="/dashboard">
                  {template}
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="profile">
                <Link to="/profile">
                  {profile}
                  <span>Profile</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="signup">
                <Link to="/signup">
                  {signup}
                  <span>Sign Up</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="header-col header-btn">
            <Button>FREE DOWNLOAD</Button>
          </div>
        </Header>

        <Content className="p-0">
          <div className="sign-in-header">
            <div className="content">
              <Title>SIGN IN</Title>
            </div>
          </div>

          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={null}
          >   
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="row-col"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder={`Input Email ${isDev && 'or rtb@gmail.com'}`} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder={`Input Password ${isDev && 'or 123456'}`} />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>
                  I agree the{" "}
                  <a href="#pablo" className="font-bold text-dark">
                    Terms and Conditions
                  </a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  SIGN IN
                </Button>
              </Form.Item>
            </Form>
            <p className="font-semibold text-muted text-center">
              Already have an account?{" "}
              <Link to="/signup" className="font-bold text-dark">
                Sign Up
              </Link>
            </p>
          </Card>
        </Content>
        <Footer>
          <Menu mode="horizontal">
            <Menu.Item key="company">Company</Menu.Item>
            <Menu.Item key="about-us">About Us</Menu.Item>
            <Menu.Item key="teams">Teams</Menu.Item>
            <Menu.Item key="products">Products</Menu.Item>
            <Menu.Item key="blogs">Blogs</Menu.Item>
          </Menu>
          <Menu mode="horizontal" className="menu-nav-social">
            <Menu.Item key="dribble">
              <Link to="#">{<DribbbleOutlined />}</Link>
            </Menu.Item>
            <Menu.Item key="twitter">
              <Link to="#">{<TwitterOutlined />}</Link>
            </Menu.Item>
            <Menu.Item key="instagram">
              <Link to="#">{<InstagramOutlined />}</Link>
            </Menu.Item>
            <Menu.Item key="github">
              <Link to="#">{<GithubOutlined />}</Link>
            </Menu.Item>
          </Menu>
        </Footer>
      </div>
    </>
  );
}
