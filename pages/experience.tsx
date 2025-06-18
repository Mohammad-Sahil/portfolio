import styless from '../styles/Home.module.css'
import styles from '../styles/Session.module.css'
import Layout from '../components/Layout'
import WorkExperience from '../components/WorkExperience'


export default function Experience() {

  return (
    <>
      <Layout>
        <div className={styless.home_container_container} style={{ marginTop: "0" }}>
          <div className={styles.session_container}>
            <h2>Work Experience</h2>
            <WorkExperience />
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
