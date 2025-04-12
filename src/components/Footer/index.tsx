import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '鱼皮pipipipipi';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'zhihu',
          title: '知乎',
          href: 'https://www.zhihu.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/msingbai',
          blankTarget: true,
        },
        {
          key: 'blog',
          title: '迷新白 Blog',
          href: 'https://msingbai.github.io/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
