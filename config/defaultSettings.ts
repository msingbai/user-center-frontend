import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '用户中心系统',
  pwa: false,
  logo: 'https://cdn.jsdelivr.net/gh/msingbai/blog_img@main/blog/basic/cabbage.svg',
  iconfontUrl: '',
};

export default Settings;
