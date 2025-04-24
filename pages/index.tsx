import Button from "@mui/material/Button"
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import bannerImg from '../public/bannerImg.png'
import TypeAnimation from 'react-type-animation'
import Link from "next/link"

export default function Home() {

  return (
    <>
      <Layout>
        <div className={styles.home_container_container}>
          <div className={styles.home_banner}>
            <div>
              <h2>Discover my Amazing<br />Project Space!</h2>
              <div className={styles.home_banner_type}>&lt;<i>code</i>&gt;  <TypeAnimation
                cursor={true}
                sequence={[
                  ' I build full-stack web and mobile applications.',
                  2000,
                  'I deploy scalable cloud solutions using Firebase, GCP, and AWS.',
                  2000,
                  'I am an Ai enthusiast and thrive in collaborative environments.',
                  2000,
                  'I craft intuitive & responsive ui for modern web and mobile platforms.',
                  2000,
                ]}

                wrapper="div"
                repeat={Infinity}
              />&lt;/<i>code</i>&gt;</div>
              <Link href="/projects" className="text-decoration-none text-white">
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
              </Link>

            </div>
            {/* <img src={bannerImg.src} alt="Sahil full img" /> */}
          </div>
          <div className={styles.home_banner}>
            <div><h3>Hi, there... 👋</h3>
              <span>HOW ARE YOU ?</span>
              <p>
                Myself Mohammad Sahil, a passionate developer with hands-on experience in building and deploying full-stack web and mobile applications. I specialize in creating scalable systems, automating workflows, and integrating cloud solutions. I enjoy solving real-world problems through code and continuously explore new technologies to improve my skill set. I&apos;m actively involved in open-source contributions and collaborative projects that make a meaningful impact. I&apos;ve also worked with multiple startups, gaining practical experience in fast-paced environments and delivering solutions that align with user and business needs.
              </p>
            </div>
          </div>
          <div className={styles.home_interest}>
            <div>
              <h2>My Interests lies in</h2>
              <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>Full Stack Development</p></div></div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>Cloud Computing & AI</p></div></div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>Problem Solving</p></div></div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"><div className={styles.interest_div}><div className={styles.interest_div_icon}><i className="fa fa-code"></i></div><p>UI/UX Designing</p></div></div>
              </div>
            </div>
          </div>
          <div className='home_footer'>
            <p>Made with 💜 By Mohammad Sahil | © {new Date().getFullYear()}</p>
            <p>Email: sahilmejakhas@gmail.com</p>
          </div>
        </div>
      </Layout>
    </>
  )
}
