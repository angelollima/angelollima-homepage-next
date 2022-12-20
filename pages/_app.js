import { ThemeProvider } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition : { delay: 0.1, duration: 0.4 }
    },
    exit: {
      x: '-100vw',
      transition : { ease: 'easeInOut', delay: 0.1, duration: 0.5 }
    }
  } 

  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.route}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
