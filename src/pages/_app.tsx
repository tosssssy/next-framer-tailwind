import 'tailwindcss/tailwind.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
