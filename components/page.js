<<<<<<< HEAD
import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import JoinButton from "./join-button";
import "../styles.scss";

const Page = ({ children, title = "" }) => (
  <React.Fragment>
    <Head title={title} />
    <Nav />
    {/* <JoinButton location="top" /> */}
    <div className="section">
      <div className="container">{children}</div>
    </div>
    {/* <JoinButton location="bottom" /> */}
    <Footer />
  </React.Fragment>
);
=======
import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import JoinButton from './join-button'
import '../styles.scss'

const Page = ({ children, title = '' }) => (
    <React.Fragment>
        <Head title={title} />
        <Nav />
        <JoinButton location="top" />
        <div className="section">
            <div className="container">{children}</div>
        </div>
        <JoinButton location="bottom" />
        <Footer />
    </React.Fragment>
)
>>>>>>> 3f046e777bd9cc69af3d2048517e065515c10380

export default Page
