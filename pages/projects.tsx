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
import portfolio from '../public/project/project_portfolio.png'

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
                tag1= "NextJS"
                tag2= "MUI"
                tag3= "Emotion"
                tag4= "NodeJS"
                tag5= "MongoDB"
                tag6= "Vercel"
                projectImg= {vriddhi.src}
              />
              <Project
                title= "NITR Notes"
                para= "One stop platform for a students reading list on campus. Compiled books & notes of every single branch and year and a lot more with a great reading experience, built using HTML,CSS,JS,Google Script and firebase, Got 1k+ daily visitors on Exam’s days"
                githubLink= "https://github.com/devdribblenitr/Notes/"
                liveLink= "https://notes.a2nitr.in/"
                tag1= "HTML5"
                tag2= "CSS3"
                tag3= "Google Script"
                tag4= "Firebase"
                tag5= "Adobe API"
                tag6= "Github"
                projectImg= {notes.src}
              />
              <Project
                title= "Amazon Book Store"
                para= "Fully dynamic & interactive Amazon Bookstore Clone hosted on Github and Google Clouds, Built using ReactJS, MUI, Bootstrap, NodeJS, Express & Stripe for payment"
                githubLink= "https://github.com/Mohammad-Sahil/amazon-clone/"
                liveLink= "https://mohammad-sahil.github.io/amazon-clone/"
                tag1= "ReactJS"
                tag2= "MUI"
                tag3= "Bootstrap"
                tag4= "NodeJS"
                tag5= "Express"
                tag6= "Stripe"
                projectImg= {amazon.src}
              />
              <Project
                title= "Ride Sharing App (Uber)"
                para= "Fully dynamic, interactive and Mobile friendly Uber clone built using NextJS, Tailwind, GoogleAuth, Mapbox, Firebase for authentication and hosted on Vercel"
                githubLink= "https://github.com/Mohammad-Sahil/uber-clone/"
                liveLink= "http://uber-clone-sahil.vercel.app/"
                tag1= "NextJS"
                tag2= "Tailwind"
                tag3= "GoogleAuth"
                tag4= "Mapbox"
                tag5= "Firebase"
                tag6= "Vercel"
                projectImg= {uber.src}
              />
              <Project
                title= "WhatsApp Group Web App"
                para= "Built a fully functional highly responsive WhatsApp Clone for group chat management using React, firebase, Bootstrap, NodeJS and hosted on Vercel"
                githubLink= "https://github.com/Mohammad-Sahil/whatsapp-clone/"
                liveLink= "https://whatsapp-group.vercel.app/"
                tag1= "ReactJS"
                tag2= "Firebase"
                tag3= "Context API"
                tag4= "MUI"
                tag5= "Google Auth"
                tag6= "Vercel"
                projectImg= {whatsapp.src}
              />
              <Project
                title= "My Portfolio"
                para= "This website is fully functional highly responsive, built using Typescript, NextJS, MUI, firebase, Emotion and hosted on Vercel and designed on Figma"
                githubLink= "https://github.com/Mohammad-Sahil/portfolio/"
                liveLink= "https://tsharpsahil.tech/"
                tag1= "Typescript"
                tag2= "NextJS"
                tag3= "Firebase"
                tag4= "MUI"
                tag5= "Emotion"
                tag6= "Vercel"
                projectImg= {portfolio.src}
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
