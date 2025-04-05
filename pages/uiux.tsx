import styless from '../styles/Home.module.css'
import styles from '../styles/Session.module.css'
import Layout from '../components/Layout'
import DesignCard from '../components/DesignCard'

import notes from '../public/project/project_a2nitr.jpg'
import vriddhi from '../public/project/project_vriddhi.png'
import portfolio from '../public/project/project_portfolio.png'
import codecanibals from '../public/project/codecanibals.png'
import nss from '../public/project/nss.png'
import ebsbs from '../public/project/ebsb.png'
import xpraints from '../public/project/xpraints.png'
import aqg from '../public/project/aqg.png'


export default function Home() {

   return (
      <>
         <Layout>
            <div className={styless.home_container_container} style={{ marginTop: "-20px" }}>
               <div className={styles.session_container}>
                  <h2>Featured Art Space of Ui/UX</h2>

                  <DesignCard
                     cardImg={vriddhi.src}
                     title="Vriddhi eSports Fest"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/9gBT4ixqZboGas4qaMf54B/Vriddhi-UX%2FUI?node-id=401%3A4"
                  />
                  <DesignCard
                     cardImg={notes.src}
                     title="NITR Notes & Book"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/6G9xGeW4XLJFSf3MabcOjg/A2NITR?node-id=0%3A1"
                  />
                  <DesignCard
                     cardImg={portfolio.src}
                     title="Personal Portfolio"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/qvqIhBy1BDzZehvt20XCpY/Sahil_Portfolio?node-id=301%3A3"
                  />
                  <DesignCard
                     cardImg={codecanibals.src}
                     title="Code Canibals"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/kJ5TZS5kEncLvoRo9NZRD8/CodeCannibals?node-id=0%3A1"
                  />
                  <DesignCard
                     cardImg={nss.src}
                     title="NSS NIT Rourkela"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/cqJ0r7JIqwM1L0c5RcJYwR/NSS-Web-Pages?node-id=603%3A2"
                  />
                  <DesignCard
                     cardImg={ebsbs.src}
                     title="Ek Bharat Shreshtha Bharat"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/fzdBRaw2X49zHuEgF75znO/EBSB---Ui-Pages?node-id=0%3A1"
                  />
                  <DesignCard
                     cardImg={aqg.src}
                     title="Ask Quick Global"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/aGR2E1NXO030d4sUC5fVfg/ASK-QUICK-GLOBAL?node-id=202%3A2"
                  />
                  <DesignCard
                     cardImg={xpraints.src}
                     title="Xpraint Web Interface"
                     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     figmaLink="https://www.figma.com/file/iiP4VgCssGKZrTsUyVqwi1/Xpraint-Home-page?node-id=41%3A227"
                  />

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
