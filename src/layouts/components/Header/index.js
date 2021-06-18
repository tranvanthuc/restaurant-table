import React from 'react';
import Logo from 'assets/images/logo.png';
import style from './style.module.scss';
import {
  EnvironmentOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';

export default () => {
  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <img src={Logo} />
        <div className={style.iconPlace}>
          <EnvironmentOutlined />
        </div>
      </div>
      <div className={style.headerRight}>
        <Button className="mr-2" type="primary">
          Sign in
        </Button>
        <Button>Sign up</Button>
        <Button type="link" shape="circle" icon={<BellOutlined />} />
        <div className="border-left">
          <Button type="link" shape="circle" icon={<SearchOutlined />} />
        </div>
      </div>
    </div>
  );
};
