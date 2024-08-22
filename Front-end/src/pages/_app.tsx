import { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (background) {
      background.classList.add('animate');

      return () => {
        background.classList.remove('animate');
      };
    }
  }, [router.route]);

  return (
    <div className="background" ref={backgroundRef}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <SpeedInsights />
    </div>
  );
}

export default MyApp;
