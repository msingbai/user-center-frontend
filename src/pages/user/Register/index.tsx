import Footer from '@/components/Footer';
import {register} from '@/services/ant-design-pro/api';
//import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import {
  //AlipayCircleOutlined,
  LockOutlined,
  //MobileOutlined,
  //TaobaoCircleOutlined,
  UserOutlined,
  //WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  //ProFormCaptcha,
  //ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
//import { Alert, message, Tabs } from 'antd';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
//import { history, useModel } from 'umi';
import { history } from 'umi';
import styles from './index.less';
import { SYSTEM_LOGO } from '@/constants';

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');

  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword, checkPassword} = values;
    //校验
    if (userPassword !== checkPassword) {
      message.error('两次密码输入不一致')
      return;
    }
    try {
      // 注册
      const id = await register(values);
      if (id > 0) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        /** 此方法会跳转到 redirect 参数所在的位置 */
        /** 用户注册成功后跳转到登录页 */
        if (!history) return;
        const {query} = history.location;
        // const {redirect} = query as {
        //   redirect: string;
        // };
        history.push({
          pathname: 'user/login',
          query,
        });
        return;
      }else{
        throw new Error(`register error id = ${id}`);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册',//按钮文字
            }
          }}
          // logo={<img alt="logo" src="/logo.svg" />}
          logo={<img alt="logo" src={SYSTEM_LOGO} />}
          title="用户中心系统"
          subTitle={'A designing UserCenter for studying——msingbai'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账户密码注册'} />
            {/*<Tabs.TabPane key="mobile" tab={'手机号注册'} />*/}
          </Tabs>
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                // placeholder={'用户名: admin or user'}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    // message: '用户名是必填项！',
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                // placeholder={'密码: ant.design'}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  //增加长度检验
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于8位！',
                  },
                ]}
              />
              {/*确认密码*/}
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                // placeholder={'密码: ant.design'}
                placeholder={'请确认密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  //增加长度检验
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于8位！',
                  },
                ]}
              />
            </>
          )}

        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
