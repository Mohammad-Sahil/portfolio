import React from 'react'
import styles from '../styles/Sidebar.module.css'
import profileImg from '../public/profile.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';
import { CircularProgressbar } from 'react-circular-progressbar';
// import '../node_modules/react-circular-progressbar/dist/styles.css';

const Sidebar = () => {
    const percentageOne = 80;
    const percentageTwo = 100; 
    const percentageThree = 70;
  return (
    <div className={styles.sidebar_container}>
        <div className={styles.sidebar_profilecard}>
            <div className={styles.sidebar_profile}>
                <img src={profileImg.src} alt='Sahil_profile'/>
                <p className={styles.profile_title}>Mohammad Sahil</p>
                <p>Full Stack Web Developer<br/>Ui/UX Designer</p>
            </div>
        </div>
        <div className={styles.sidebar_details}>
        <p><span>Residence :</span><span className={styles.sidebar_details_right}>India</span></p>
        <p><span>City :</span><span className={styles.sidebar_details_right}>Prayagraj</span></p>
        <p><span>DOB :</span><span className={styles.sidebar_details_right}>7 Nov 2001</span></p>
        </div>
        <div className={styles.sidebar_lang}>
            <div className={styles.sidebar_lang_progress}>
            <div className="row">
            <div className="col-4"><CircularProgressbar value={percentageOne} text={`${percentageOne}%`} /><br/><p>English</p></div>
            <div className="col-4"><CircularProgressbar value={percentageTwo} text={`${percentageTwo}%`} /><br/><p>Hindi</p></div>
            <div className="col-4"><CircularProgressbar value={percentageThree} text={`${percentageThree}%`} /><br/><p>Urdu</p></div>
            </div>
            </div>
        </div>
        <div className={styles.sidebar_cvdownload}>
            <a href='#' target='_blank' className='text-decoration-none'>Download CV <DownloadIcon style={{fontSize: "20px"}}/></a>
        </div>
        <div className={styles.sidebar_footer}>
            <div className={styles.sidebar_icon}>
            <a href='#' target='_blank' className='text-decoration-none'><GitHubIcon style={{fontSize: "15px", marginLeft: "4px", marginRight: "4px"}}/></a>
            <a href='#' target='_blank' className='text-decoration-none'><i className="fa fa-medium" aria-hidden="true"></i></a>
            <a href='#' target='_blank' className='text-decoration-none'><LinkedInIcon style={{fontSize: "15px", marginLeft: "4px", marginRight: "4px"}}/></a>
            <a href='#' target='_blank' className='text-decoration-none'><TwitterIcon style={{fontSize: "15px", marginLeft: "4px", marginRight: "4px"}}/></a>
            <a href='#' target='_blank' className='text-decoration-none'><i className="fa fa-behance" aria-hidden="true"></i></a>
            <a href='#' target='_blank' className='text-decoration-none'><InstagramIcon style={{fontSize: "15px", marginLeft: "4px", marginRight: "4px"}}/></a>
            <a href='#' target='_blank' className='text-decoration-none'><FacebookIcon style={{fontSize: "15px", marginLeft: "4px", marginRight: "4px"}}/></a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar