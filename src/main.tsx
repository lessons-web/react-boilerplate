import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import router from '@/pages/router';
import Fallback from '@/pages/fallback';
import 'antd/dist/reset.css';
import '@/assets/styles/main.css';
import '@/assets/styles/responsive.css';

dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </ConfigProvider>
);
