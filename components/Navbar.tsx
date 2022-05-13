import React from 'react'
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

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <div className={styles.nav_menu}>
            <ul className='p-0'>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><HomeIcon style={{color: "#8C8C8E"}}/></IconButton><p>Home</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><IntegrationInstructionsIcon style={{color: "#8C8C8E"}}/></IconButton><p>Projects</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><CodeIcon style={{color: "#8C8C8E"}}/></IconButton><p>Stack</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><ArticleIcon style={{color: "#8C8C8E"}}/></IconButton><p>Blog</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><ViewQuiltIcon style={{color: "#8C8C8E"}}/></IconButton><p>UI/UX</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><GroupIcon style={{color: "#8C8C8E"}}/></IconButton><p>POR</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><GroupsIcon style={{color: "#8C8C8E"}}/></IconButton><p>Sessions</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><BrushIcon style={{color: "#8C8C8E"}}/></IconButton><p>DEsign</p></a></li>
            <li><a href='#' className='text-decoration-none d-flex justify-content-center flex-column'><IconButton><ContactPageIcon style={{color: "#8C8C8E"}}/></IconButton><p>Contact</p></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar