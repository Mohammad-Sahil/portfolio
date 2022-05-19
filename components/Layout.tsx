import * as React from 'react';
import { useState } from 'react';
import Head from 'next/head'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton } from '@material-ui/core';

const Layout = ({ children }) => {
    const [ sidebarD, setSidebarD ] = useState("none");
    const [ navbarD, setNavbarD ] = useState("none");

    return (
    <>
      <Head>
    <title>Mohammad Sahil | Portfolio</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className={styles.layout_container}>
        <div className={styles.layout_margin}>
            <div className={styles.layout_topbar}>
            <IconButton onClick={() => setSidebarD(prev => ( prev === "none" ? "block" : "none"))} style={{color: "white"}}><MoreVertIcon style={{marginLeft: "18px",fontSize: "28px"}}/></IconButton>
            <IconButton  onClick={() => setNavbarD(prev => ( prev === "none" ? "block" : "none"))} style={{color: "white", marginRight: 0, marginLeft: "auto"}}><MenuOpenIcon style={{marginLeft: "auto", marginRight: "18px",fontSize: "28px"}}/></IconButton>
            </div>
            <div className="layout_margin_container d-flex">
            <Sidebar
              display={sidebarD}
              />
            <div className={styles.home_container}>
            {children}
                {/* <div className={styles.force_overflow}></div> */}
            </div>
              <Navbar
                display={navbarD}
              />
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout