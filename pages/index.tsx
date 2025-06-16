// import Image from 'next/image'
import { useState } from 'react';
import HomePage from '../components/HomePage';
import Layout from '../components/Layout'
import SplashScreen from '../components/SplashScreen';


export default function Home() {
  const [showHome, setShowHome] = useState(false);
  return (
    <>
      <Layout>
        {showHome ? <HomePage /> : <SplashScreen
          setShowHome={setShowHome}
        />}
      </Layout>
    </>
  )
}
