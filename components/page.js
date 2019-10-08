import React from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
=======
>>>>>>> 64878bbe12340f5c0dad22757b37bde02c8b8fc5
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

Page.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
}

export default Page
