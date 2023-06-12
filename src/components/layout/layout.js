import React from 'react'
import './layout.scss'
import LeftSidebar from '../left-sidebar/leftsidebar.component'
import Header from '../header/header.component'

const Layout = ({ children }) => {
    return (
        <div className='layout-container'>
            <div className="layout-sidebar">
                <LeftSidebar />
            </div>
            <div className="navbar">
                <Header />
            </div>
            <div className='content'>{children}</div>
        </div>
    )
}

export default Layout