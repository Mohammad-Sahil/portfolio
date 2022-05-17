// import Image from 'next/image'
import styless from '../styles/Home.module.css'
import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout'
import Project from '../components/Project'


export default function Home() {
  
  return (
    <>
      <Layout>
          <div className={styless.home_container_container} style={{marginTop: "-20px"}}>
            <div className={styles.project_container}>
              <h2 className="page_title">Featured Projects</h2>
              <Project/>
              <Project/>
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
