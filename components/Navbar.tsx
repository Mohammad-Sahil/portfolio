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

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <div className={styles.nav_menu}>
            <ul className='p-0'>
            <li><Link href="/" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><HomeIcon style={{color: "#8C8C8E"}}/></IconButton><p>Home</p></a></Link></li>
            <li><Link href="/projects" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><IntegrationInstructionsIcon style={{color: "#8C8C8E"}}/></IconButton><p>Projects</p></a></Link></li>
            <li><Link href="/stack" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><CodeIcon style={{color: "#8C8C8E"}}/></IconButton><p>Stack</p></a></Link></li>
            <li><Link href="/blog" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><ArticleIcon style={{color: "#8C8C8E"}}/></IconButton><p>Blog</p></a></Link></li>
            <li><Link href="/uiux" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><ViewQuiltIcon style={{color: "#8C8C8E"}}/></IconButton><p>UI/UX</p></a></Link></li>
            <li><Link href="/por" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><GroupIcon style={{color: "#8C8C8E"}}/></IconButton><p>POR</p></a></Link></li>
            <li><Link href="/session" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><GroupsIcon style={{color: "#8C8C8E"}}/></IconButton><p>Sessions</p></a></Link></li>
            <li><Link href="/design" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><BrushIcon style={{color: "#8C8C8E"}}/></IconButton><p>Design</p></a></Link></li>
            <li><Link href="/contactus" className='text-decoration-none d-flex justify-content-center flex-column'><a className='text-decoration-none mx-auto d-flex flex-column justify-content-center'><IconButton><ContactPageIcon style={{color: "#8C8C8E"}}/></IconButton><p>Contact</p></a></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar