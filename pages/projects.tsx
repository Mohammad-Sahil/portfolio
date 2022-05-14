import Button from "@mui/material/Button"
import GitHubIcon from '@mui/icons-material/GitHub';
// import Image from 'next/image'
import styless from '../styles/Home.module.css'
import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout'
import MacFrame from '../public/MacFrame.svg'
import laptopModel from '../public/laptopModel.png'
import IosShareIcon from '@mui/icons-material/IosShare';
import InfoIcon from '@mui/icons-material/Info';

export default function Home() {
  
  return (
    <>
      <Layout>
          <div className={styless.home_container_container} style={{marginTop: "-20px"}}>
            <div className={styles.project_container}>
              <h2>Featured Projects</h2>
                <div className={styles.project_macframe}>
                    <img src={MacFrame.src} alt="Mac Frame" />
                        <div className={styles.macFrame_content}>
                            <div className="row">
                            <div className="col-12 col-md-6">
                                <img src={laptopModel.src} alt="Project Img" className={styles.macFrame_content_img}/>
                            </div>
                            <div className="col-12 col-md-6 mx-auto">
                               <div className={styles.macFrame_content_details}>
                               <div className="px-2">
                                <h2>First Project</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis sagittis suspendisse ut risus nunc sed. Viverra turpis velit ut ut dignissim vulputate scelerisque vitae. Gravida congue pellentesque turpi</p>
                                <div className="row">
                                <div className="col-6">
                <Button
                  // onClick={openOauth}
                  className={styles.project_button}
                  sx={{
                    borderColor: "#AA1EF1",
                    color: "white",
                    background: "linear-gradient(90deg, #DA6E82 0%, #A756E6 100%);",
                  }}
                  variant="contained"
                  // disabled={true}
                >
                  GITHUB <GitHubIcon/>
                </Button>
                                </div>
                                <div className="col-6">
                <Button
                  // onClick={openOauth}
                  className={styles.project_button}
                  sx={{
                    borderColor: "#AA1EF1",
                    color: "white",
                    background: "linear-gradient(90deg, #DA6E82 0%, #A756E6 100%);",
                  }}
                  variant="contained"
                  // disabled={true}
                >
                  LIVE <IosShareIcon/>
                </Button>
                                </div>
                                </div>
                                </div>
                               </div>
                            </div>
                            </div>
                            <div className={styles.macFrame_content_tag}>
                                <div className="p-1 d-flex align-items-center" style={{color: "#9C9CA2",fontSize: "10px",fontWeight: "700"}}><span className="p-1" style={{color: "#A857E5"}}><InfoIcon/></span>TECH USED</div>
                                <div className={styles.macFrame_content_tag_tags}>
                                <p><span>#</span>HTML</p>
                                <p><span>#</span>HTML</p>
                                <p><span>#</span>HTML</p>
                                <p><span>#</span>HTML</p>
                                <p><span>#</span>HTML</p>
                                <p><span>#</span>HTML</p>
                                <p><span>#</span>HTML</p>
                                <p><span>#</span>HTML</p>
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
