import React from 'react'
import PropTypes from 'prop-types'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles.scss'

const Page = ({ children, title = '' }) => (
    <React.Fragment>
        <Head title={title} />
        <Nav />
        <div className="section">
            <div className="container">
                <h1 className="title">{title}</h1>
                <div>{children}</div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
)

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}

export default Page
