import * as React from 'react';
import { useState } from 'react';
import Head from 'next/head'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton } from '@material-ui/core'
import Chat from './Chat';

const Layout = ({ children }) => {
    const [ sidebarD, setSidebarD ] = useState("none");
    const [ navbarD, setNavbarD ] = useState("none");

    return (
    <>
  <Head>
        <title>Mohammad Sahil | Portfolio</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <link rel="icon" href="/favicon.ico" />

        {/* *********** Meta SEO***********  */}
        <meta property="og:title" content="Sahil is an undergrad, pursuing Int MSc(5 year program) in Life Science at National Institute of Technology Rourkela. Founder and President of Club DevDribble at NIT Rourkela. He has a keen interest in building highly scalable full stack web applications" />
        <meta name="keywords"  content="Mohammad Sahil, Mohd Sahil, Mo Sahil, Sahil,  M Sahil, vriddhinitr, vriddhi, DevDribble,dev dribble, fest, festnitr, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,nitr developer, developer, nitr mern developer" />
        <meta name="description" content="Mohammad Sahil Portfolio Website" />
        
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tsharpsahil.tech/" />
        <meta property="og:image" content="https://res.cloudinary.com/dsg5sww1c/image/upload/v1653170974/squre_profileImg_agxqs5.jpg" />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" /> <meta name="description" content="Mohammad Sahil" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <Chat/>
    </div>
    </>
  )
}

export default Layout