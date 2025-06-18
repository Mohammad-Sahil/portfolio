import { useState } from 'react'
import styless from '../styles/Home.module.css'
import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout'
import Project from '../components/Project'
import projectsArray from '../components/projectsArray.js'

export default function Home() {
  const [category, setCategory] = useState('all');

  // Filter projects based on selected category
  const filteredProjects = category === 'all'
    ? projectsArray
    : projectsArray.filter(project => project.cat === category);

  return (
    <>
      <Layout>
        <div className={styless.home_container_container} style={{ marginTop: "0" }}>
          <div className={styles.project_container}>
            <div className={styles.project_header}>
              <div className="row w-100 align-items-center">
                <div className="col-12 col-md-6 text-start">
                  <h2 className="page_title mb-md-0">
                    Featured Projects
                  </h2>
                </div>
                <div className="col-12 col-md-6 text-md-end px-0">
                  <div className={styles.category_buttons} style={{ float: "right" }}>
                    <button
                      className={`${styles.category_btn} ${category === 'all' ? styles.active : ''}`}
                      onClick={() => setCategory('all')}
                    >
                      All
                    </button>
                    <button
                      className={`${styles.category_btn} ${category === 'web' ? styles.active : ''}`}
                      onClick={() => setCategory('web')}
                    >
                      Web
                    </button>
                    <button
                      className={`${styles.category_btn} ${category === 'mobile' ? styles.active : ''}`}
                      onClick={() => setCategory('mobile')}
                    >
                      Mobile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {filteredProjects.map((item, index) => {
              return (
                <Project
                  key={index}
                  title={item.title}
                  para={item.para}
                  githubLink={item.githubLink}
                  liveLink={item.liveLink}
                  tag1={item.tag1}
                  tag2={item.tag2}
                  tag3={item.tag3}
                  tag4={item.tag4}
                  tag5={item.tag5}
                  tag6={item.tag6}
                  projectImg={item.projectImg}
                />
              )
            })}

            <div className="home_footer">
              <p>Made with 💜 By Mohammad Sahil | © {new Date().getFullYear()}</p>
              <p>Email: sahilmejakhas@gmail.com</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}