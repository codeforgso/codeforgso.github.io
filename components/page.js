import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import '../styles.scss';

const Page = ({ children, title = '' }) => (
  <React.Fragment>
    <Head title={title} />
    <Nav />
    <div className="section">
      <div className="container">{children}</div>
    </div>
  </React.Fragment>
);

export default Page;
