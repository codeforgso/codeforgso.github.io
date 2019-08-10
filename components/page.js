import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import '../styles.scss';

const Page = ({ children, title = '' }) => (
  <div>
    <Head title={title} />
    <Nav />
    {children}
  </div>
);

export default Home;
