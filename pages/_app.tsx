import { useState, useEffect } from 'react';
import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from '../components/SplashScreen';

function MyApp({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasJustLoaded = !sessionStorage.getItem('hasLoadedOnce');

    if (hasJustLoaded) {
      setShowSplash(true);
      sessionStorage.setItem('hasLoadedOnce', 'true');
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  if (showSplash) {
    return <SplashScreen setShowSplash={setShowSplash} />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;