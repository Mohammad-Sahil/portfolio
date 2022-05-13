import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
        <div className={styles.layout_margin}>
            <div className="layout_margin_container d-flex">
            <Sidebar/>
            {children}
            <Navbar/>
            </div>
        </div>
    </div>
  )
}

export default Layout