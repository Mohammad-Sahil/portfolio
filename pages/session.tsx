import styless from '../styles/Home.module.css'
import styles from '../styles/Session.module.css'
import Layout from '../components/Layout'


export default function Home() {

  return (
    <>
      <Layout>
        <div className={styless.home_container_container} style={{ marginTop: "0" }}>
          <div className={styles.session_container}>
            <h2>Talks & Sessions</h2>
            <div className={styles.session_container_div}>
              Coming Soon
            </div>
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
