import styless from '../styles/Home.module.css'
import styles from '../styles/Stack.module.css'
import Layout from '../components/Layout'
import stacks from '../components/stack'


export default function Home() {
  
  return (
    <>
      <Layout>
          <div className={styless.home_container_container} style={{marginTop: "-20px"}}>
            <div className={styles.stack_container}>
              <h2>Tech Stacks</h2>
              <div className={styles.stack_container_div}>
                   <h4>GENERAL PROGRAMMING</h4>
                   <div className="row">
                    {stacks.filter((olddata) => {
                       return olddata.category === "GENERAL PROGRAMMING"
                    }).map((data) => {
                        return  <div key={data.id} className="col-6 col-md-3">
                        <div className={styles.tech_card}>
                             <img src={data.img} alt="Tech Icon"/>
                             <p className='m-0 p-0'>{data.title}</p>
                        </div>
                    </div>
                    })}
                   </div>
               </div>
               <div className={styles.stack_container_div}>
                   <h4>FRAMEWORKS & DATABASES</h4>
                   <div className="row">
                    {stacks.filter((olddata) => {
                       return olddata.category === "FRAMEWORKS & DATABASES"
                    }).map((data) => {
                        return  <div key={data.id} className="col-6 col-md-3">
                        <div className={styles.tech_card}>
                             <img src={data.img} alt="Tech Icon"/>
                             <p className='m-0 p-0'>{data.title}</p>
                        </div>
                    </div>
                    })}
                   </div>
               </div>
               <div className={styles.stack_container_div}>
                   <h4>TOOLS & UTILITIES</h4>
                   <div className="row">
                    {stacks.filter((olddata) => {
                       return olddata.category === "TOOLS & UTILITIES"
                    }).map((data) => {
                        return  <div key={data.id} className="col-6 col-md-3">
                        <div className={styles.tech_card}>
                             <img src={data.img} alt="Tech Icon"/>
                             <p className='m-0 p-0'>{data.title}</p>
                        </div>
                    </div>
                    })}
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
