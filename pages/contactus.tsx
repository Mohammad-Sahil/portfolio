import { useState } from 'react';
import Button from "@mui/material/Button";
import styless from '../styles/Home.module.css';
import styles from '../styles/Contact.module.css';
import Layout from '../components/Layout';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { db } from '../components/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface ChangeEvent {
    target: {
      id: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent): void => {
    const { id, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [id === 'name' ? 'name' :
        id === 'email' ? 'email' : 'message']: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      // Add timestamp to the data
      const dataToSubmit = {
        ...formData,
        timestamp: new Date()
      };

      // Add document to Firestore
      await addDoc(collection(db, "contactus"), dataToSubmit);

      // Show success toast
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      // Show error toast
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Layout>
        <div className={styless.home_container_container} style={{ marginTop: "-20px" }}>
          <div className={styles.contact_container}>
            <h2>Get in touch</h2>
            <div>
              <div className={styles.contact_container_div}>
                <form className="px-5 py-4" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name"><PersonIcon /></label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby="nameHelp"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><AlternateEmailIcon /></label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message"><MailOutlineIcon /></label>
                    <textarea
                      className="form-control"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <Button
                      type="submit"
                      className={styles.contact_container_div_button}
                      sx={{
                        borderColor: "#AA1EF1",
                        background: "linear-gradient(90deg, #DA6E82 0%, #A756E6 100%);",
                      }}
                      variant="contained"
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

      {/* Toast container for notifications */}
      <ToastContainer />
    </>
  );
}