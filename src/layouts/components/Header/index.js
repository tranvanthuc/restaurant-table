import React from 'react';
import Logo from 'assets/images/logo.png';
import style from './style.module.scss';
import {
  EnvironmentOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();

  const goHome = () => history.push('/');
  const goLogin = () => history.push('/login');
  const goRegister = () => history.push('/register');

  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <img src={Logo} onClick={goHome} className="cursor-pointer" />
        <div className={style.iconPlace}>
          <EnvironmentOutlined />
        </div>
      </div>
      <div className={style.headerRight}>
        <Button className="mr-2" type="primary" onClick={goLogin}>
          Sign in
        </Button>
        <Button onClick={goRegister}>Sign up</Button>
        <Button type="link" shape="circle" icon={<BellOutlined />} />
        <div className="border-left">
          <Button type="link" shape="circle" icon={<SearchOutlined />} />
        </div>
      </div>
    </div>
  );
};
