import Button from "@mui/material/Button"
import styless from '../styles/Home.module.css'
import styles from '../styles/Blog.module.css'
import Layout from '../components/Layout'
import Blog from "../components/Blog"

export default function Home() {
  
  return (
    <>
      <Layout>
          <div className={styless.home_container_container} style={{marginTop: "-20px"}}>
            <div className={styles.blog_container}>
              <h2>Latest Blogs</h2>
                <div className="blog_container_blog">
                    <div className="row mx-auto my-4">
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
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
