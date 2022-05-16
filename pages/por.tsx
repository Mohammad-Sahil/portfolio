import styless from '../styles/Home.module.css'
import styles from '../styles/Por.module.css'
import Layout from '../components/Layout'
import dd from '../public/por/DevDribble.jpg'
import aspirants from '../public/por/Aspirants.jpg'
import EBSB from '../public/por/EBSB.png'
import tbs from '../public/por/logo.jpg'
import ecell from '../public/por/LOGO01.jpg'
import vriddhi from '../public/por/vriddhi.jpg'



export default function Home() {
  
  return (
    <>
      <Layout>
          <div className={styless.home_container_container} style={{marginTop: "-20px"}}>
            <div className={styles.por_container}>
              <h2>Position of Responsibility</h2>
              <div className={styles.por_container_div}>
                   {/* <h4>GENERAL PROGRAMMING</h4> */}
                   <div className="row">
                   <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src={dd.src} alt="Tech Icon"/>
                             <div>
                             <h4>Founder & President</h4>
                             <p className='m-0 p-0'>DevDribble</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src={ecell.src} alt="Tech Icon"/>
                             <div>
                             <h4>Secretary & Tech Lead</h4>
                             <p className='m-0 p-0'>Entrepreneurship‐cell, NITR</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src={tbs.src} alt="Tech Icon"/>
                             <div>
                             <h4>Vice President & Technocrat</h4>
                             <p className='m-0 p-0'>The Bioscience Society</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src={aspirants.src} alt="Tech Icon"/>
                             <div>
                             <h4>Vice President</h4>
                             <p className='m-0 p-0'>Aspirants</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src={EBSB.src} alt="Tech Icon"/>
                             <div>
                             <h4>Secretary</h4>
                             <p className='m-0 p-0'>Ek Bharat Shreshtha Bharat, NITR</p>
                             </div>
                        </div>
                    </div>
                    
                   </div>
               </div>
               <div className={styles.por_container_div}>
                   <h4>Volunteer Experience</h4>
                   <div className="row">
                   <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src="https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/experience/postman.svg" alt="Tech Icon"/>
                             <div>
                             <h4>Student Expert</h4>
                             <p className='m-0 p-0'>Postman</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src="https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/experience/angelhack.png" alt="Tech Icon"/>
                             <div>
                             <h4>Student Ambassador</h4>
                             <p className='m-0 p-0'>Angelhack</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src="https://www.eqmagpro.com/wp-content/uploads/2021/07/nit-rourkela.jpg" alt="Tech Icon"/>
                             <div>
                             <h4>Designer & Developer</h4>
                             <p className='m-0 p-0'>NITRAA</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.por_card}>
                             <img src={vriddhi.src} alt="Tech Icon"/>
                             <div>
                             <h4>Technical Core Team</h4>
                             <p className='m-0 p-0'>Vriddhi (E-sports Fest)</p>
                             </div>
                        </div>
                    </div>
                    
                   </div>
               </div>
               
                <div className="home_footer">
                  <p>Made with 💜 By Mohammad Sahil | © 2022</p>
                  <p>Email: sahilmejakhas@gmail.com</p>
            </div>
            </div>
          </div>
      </Layout>
    </>
  )
}
