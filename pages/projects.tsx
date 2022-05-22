// import Image from 'next/image'
import styless from '../styles/Home.module.css'
import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout'
import Project from '../components/Project'

import notes from '../public/project/project_a2nitr.jpg'
import vriddhi from '../public/project/project_vriddhi.png'
import uber from '../public/project/project_uber.png'
import amazon from '../public/project/project_amazon.png'
import whatsapp from '../public/project/project_whatsapp.png'

export default function Home() {
  
  return (
    <>
      <Layout>
          <div className={styless.home_container_container} style={{marginTop: "-20px"}}>
            <div className={styles.project_container}>
              <h2 className="page_title">Featured Projects</h2>
              <Project
                title= "Vriddhi eSports Fest Website"
                para= "Built and designed a fully functional highly responsive web app for the official eSports Fest of NIT Rourkela from scratch using Next.js,MUI, Emotion, Node.js, MongoDB and Vercel."
                githubLink= "https://github.com/Vriddhi2021/frontend/"
                liveLink= "https://www.vriddhinitr.com/"
                projectImg= {vriddhi.src}
              />
              <Project
                title= "NITR Notes"
                para= "One stop platform for a students reading list on campus. Compiled books & notes of every single branch and year and a lot more with a great reading experience, built using HTML,CSS,JS,Google Script and firebase, Got 1k+ daily visitors on Exam’s days"
                githubLink= "https://github.com/devdribblenitr/Notes/"
                liveLink= "https://notes.a2nitr.in/"
                projectImg= {notes.src}
              />
              <Project
                title= "Amazon Book Store"
                para= "Fully dynamic & interactive Amazon Bookstore Clone hosted on Github and Google Clouds, Built using ReactJS, MUI, Bootstrap, NodeJS, Express & Stripe for payment"
                githubLink= "https://github.com/Mohammad-Sahil/amazon-clone/"
                liveLink= "https://mohammad-sahil.github.io/amazon-clone/"
                projectImg= {amazon.src}
              />
              <Project
                title= "Ride Sharing App (Uber)"
                para= "Fully dynamic, interactive and Mobile friendly Uber clone built using NextJS, Tailwind, GoogleAuth, Mapbox, Firebase for authentication and hosted on Vercel"
                githubLink= "https://github.com/Mohammad-Sahil/uber-clone/"
                liveLink= "http://uber-clone-sahil.vercel.app/"
                projectImg= {uber.src}
              />
              <Project
                title= "WhatsApp Group Web App"
                para= "Built a fully functional highly responsive WhatsApp Clone for group chat management using React, firebase, Bootstrap, NodeJS and hosted on Vercel"
                githubLink= "https://github.com/Mohammad-Sahil/whatsapp-clone/"
                liveLink= "/projects"
                projectImg= {whatsapp.src}
              />
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
