import React from 'react'
import PropTypes from 'prop-types'
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
            <h1 className="title">{title}</h1>
            <div className="container">{children}</div>
        </div>
        <JoinButton location="bottom" />
        <Footer />
    </React.Fragment>
)

Page.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
}

export default Page
