import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Join from '../components/join';
import '../styles.scss';

const Page = ({ children, title = '' }) => (
  <React.Fragment>
    <Head title={title} />
    <Nav />
    <Join />
    <div className="section">
      <div className="container">{children}</div>
    </div>
    <Footer />
  </React.Fragment>
);

export default Page;
