import Button from "@mui/material/Button"
import styless from '../styles/Home.module.css'
import styles from '../styles/Contact.module.css'
import Layout from '../components/Layout'
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function Home() {

  return (
    <>
      <Layout>
        <div className={styless.home_container_container} style={{ marginTop: "-20px" }}>
          <div className={styles.contact_container}>
            <h2>Get in touch</h2>
            <div>
              <div className={styles.contact_container_div}>
                <form className="px-5 py-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><PersonIcon /></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><AlternateEmailIcon /></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"><MailOutlineIcon /></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group">
                    <Button
                      // onClick={openOauth}
                      className={styles.contact_container_div_button}
                      sx={{
                        borderColor: "#AA1EF1",
                        background: "linear-gradient(90deg, #DA6E82 0%, #A756E6 100%);",
                      }}
                      variant="contained"
                    // disabled={true}
                    >
                      SEND MESSAGE
                    </Button>
                  </div>
                </form>
              </div>
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
