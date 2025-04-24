import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { Avatar, IconButton } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import BrushIcon from '@mui/icons-material/Brush';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Navbar = ({ display }) => {
  return (
    <div className={styles.navbar_container} style={{ display: display }}>
      <div className={styles.nav_menu}>
        <ul className='p-0'>
          <li><Link href="/" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><HomeIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Home</p></a></Link></li>
          <li><Link href="/projects" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><IntegrationInstructionsIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Projects</p></a></Link></li>
          <li><Link href="/experience" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><EngineeringIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Experience</p></a></Link></li>
          <li><Link href="/stack" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><CodeIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Stack</p></a></Link></li>
          <li><Link href="/blog" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><ArticleIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Blog</p></a></Link></li>
          <li><Link href="/por" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><GroupIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>POR</p></a></Link></li>
          <li><Link href="/uiux" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><ViewQuiltIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>UI/UX</p></a></Link></li>
          <li><Link href="/design" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><BrushIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Design</p></a></Link></li>
          <li><Link href="/contactus" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><ContactPageIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Contact</p></a></Link></li>
          <li><Link href="/session" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton style={{ paddingTop: "10px" }}><GroupsIcon style={{ color: "#8C8C8E" }} /></IconButton><p style={{ paddingBottom: "10px" }}>Sessions</p></a></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar