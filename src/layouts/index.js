import BasicLayout from './BasicLayout';
import BlankLayout from './BlankLayout';

const Layout = (type) => {
  switch (type) {
    case 'default':
      return BlankLayout;
    case 'auth':
      return BasicLayout;
    default:
      return BlankLayout;
  }
};

export default Layout;
