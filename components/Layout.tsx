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
            <div className={styles.home_container}>
            {children}
                {/* <div className={styles.force_overflow}></div> */}
            </div>
            <Navbar/>
            </div>
        </div>
    </div>
  )
}

export default Layout