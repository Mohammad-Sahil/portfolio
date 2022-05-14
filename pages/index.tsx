import Button from "@mui/material/Button"
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import bannerImg from '../public/bannerImg.png'
import TypeAnimation from 'react-type-animation';

export default function Home() {
  
  return (
    <>    
      <Layout>
          <div className={styles.home_container_container}>
          <div className={styles.home_banner}>
               <div>
               <h2>Discover my Amazing<br/>Art Space</h2>
                <div className={styles.home_banner_type}>&lt;<i>code</i>&gt;  <TypeAnimation
                    cursor={true}
                    sequence={[
                      ' I design web interfaces.',
                      2000,
                      'I build fully dynamic web applications.',
                      2000,  
                    ]}
                    wrapper="div"
                    repeat={Infinity}
                  />&lt;/<i>code</i>&gt;</div>
                <Button
                  // onClick={openOauth}
                  className={styles.home_button}
                  sx={{
                    borderColor: "#AA1EF1",
                    color: "white",
                    background: "linear-gradient(90deg, #DA6E82 0%, #A756E6 100%);",
                  }}
                  variant="contained"
                  // disabled={true}
                >
                  EXPLORE NOW
                </Button>
               </div>
                <img src={bannerImg.src} alt="Sahil full img"/>
            </div>
            <div className={styles.home_banner}>
                <div><h3>Hi, there... 👋</h3>
                <span>HOW ARE YOU ?</span>
                <p>Sahil is an undergrad, pursuing Int MSc(5 year program) in Life Science at National Institute of Technology Rourkela. Founder and President of a coding Club DevDribble at NIT Rourkela. He has a keen interest in building highly scalable full stack web applications, deploying them, automating the workflows, and monitoring applications. He is a community-driven person, loves building projects which would help tackle a real world problem. He has also been actively involved in various events and activities at the institute also worked with several start-ups.</p></div>
            </div>
            <div className={styles.home_interest}>
                  <div>
                    <h2>My Interests lies in</h2>
                    <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>Full Stack Wev Development</p></div></div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>Full Stack Wev Development</p></div></div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>Full Stack Wev Development</p></div></div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>Full Stack Wev Development</p></div></div>
                    </div>
                  </div>
            </div>
            <div className={styles.home_footer}>
                  <p>Made with 💜 By Mohammad Sahil | © 2022</p>
                  <p>Email: sahilmejakhas@gmail.com</p>
            </div>
          </div>
      </Layout>
    </>
  )
}
