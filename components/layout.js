import React from 'react';
import { Menu } from 'semantic-ui-react';
import Header from './Header';
import 'semantic-ui-css/semantic.min.css';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
