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
  const [sidebarD, setSidebarD] = useState("none");
  const [navbarD, setNavbarD] = useState("none");

  return (
    <>
      <Head>
        <title>Mohammad Sahil | Full Stack Developer Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />

        {/* *********** Primary Meta Tags *********** */}
        <meta name="title" content="Mohammad Sahil | Full Stack Developer Portfolio" />
        <meta name="description" content="I'm Mohammad Sahil — a passionate full stack developer skilled in React, Next.js, Node.js, Firebase, Flutter & more. I've led production-ready projects and built scalable dashboards, admin panels, and mobile apps." />
        <meta name="keywords" content="Mohammad Sahil, Full Stack Developer, React Developer, Next.js, Flutter Developer, Node.js Developer, Firebase, GCP, AWS, Typescript Developer, Dashboard Developer, Admin Panel, Portfolio" />
        <meta name="author" content="Mohammad Sahil" />

        {/* *********** Open Graph / Facebook *********** */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tsharpsahil.vercel.app/" />
        <meta property="og:title" content="Mohammad Sahil | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Experienced in React, Next.js, Firebase, Flutter & more — building scalable web and mobile platforms." />
        <meta property="og:image" content="https://tsharpsahil.vercel.app/waimg.png" />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" />

        {/* *********** Twitter Card *********** */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tsharpsahil.vercel.app/" />
        <meta name="twitter:title" content="Mohammad Sahil | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="React, Next.js, Firebase, Flutter & more — building production-ready platforms and real-time dashboards." />
        <meta name="twitter:image" content="https://tsharpsahil.vercel.app/waimg.png" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohammad Sahil",
            "alternateName": ["Mohd Sahil", "M Sahil", "Mo Sahil"],
            "url": "https://tsharpsahil.vercel.app/",
            "image": "https://tsharpsahil.vercel.app/waimg.png",
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance | Focus-on-Concepts | Just-Speak | Talentz | Masterji Tailor | Vriddhi NITR | NITR | DevDribble | E-cell NITR",
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "National Institute of Technology Rourkela"
            },
            "sameAs": [
              "https://github.com/Mohammad-Sahil",
              "https://www.linkedin.com/in/tsharpsahilemeja/",
              "https://x.com/tsharpsahil"
            ],
            "knowsAbout": [
              "React.js", "Next.js", "Node.js", "Firebase", "Flutter", "GCP", "AWS", "TypeScript", "Full Stack Development", "Web Development", "Mobile App Development"
            ],
            "description": "I'm Mohammad Sahil — a passionate full stack developer skilled in React, Next.js, Node.js, Firebase, Flutter & more. I build scalable dashboards, admin panels, and mobile apps."
          })
        }}
      />

      <div className={styles.layout_container}>
        <div className={styles.layout_margin}>
          <div className={styles.layout_topbar}>
            <IconButton onClick={() => setSidebarD(prev => (prev === "none" ? "block" : "none"))} style={{ color: "white" }}><MoreVertIcon style={{ marginLeft: "18px", fontSize: "28px" }} /></IconButton>
            <IconButton onClick={() => setNavbarD(prev => (prev === "none" ? "block" : "none"))} style={{ color: "white", marginRight: 0, marginLeft: "auto" }}><MenuOpenIcon style={{ marginLeft: "auto", marginRight: "18px", fontSize: "28px" }} /></IconButton>
          </div>
          <div className="layout_margin_container d-flex" style={{ borderRadius: "0.6rem", overflow: "hidden" }}>
            <Sidebar
              display={sidebarD}
            />
            <div className={styles.home_container}>
              {children}
            </div>
            <Navbar
              display={navbarD}
            />
          </div>
        </div>
        <Chat />
      </div>
    </>
  )
}

export default Layout