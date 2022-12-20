import Spline from '@splinetool/react-spline';

import { motion } from 'framer-motion';

function SunIcon({ onClick }) {
    return (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
            <Spline scene="https://prod.spline.design/WtRWEym7qbNaPbyf/scene.splinecode" onClick={onClick} className="cursor-pointer" />
        </motion.div>
    );
}

function MoonIcon({ onClick }) {
    return (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
            <Spline scene="https://prod.spline.design/jgg4J18nBLeJzXp8/scene.splinecode" onClick={onClick} className="cursor-pointer" />
        </motion.div>
    );
}

function KeyboardMobile() {
    return (
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
            <Spline scene="https://prod.spline.design/v0fW4zFIlb54lE5H/scene.splinecode" />
        </motion.div>
    );
}

function KeyboardPc() {
    return (
        <motion.div
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        >
            <Spline scene="https://prod.spline.design/mUNEb9wCctZCMWxj/scene.splinecode" />
        </motion.div>
    );
}

export { SunIcon, MoonIcon, KeyboardMobile, KeyboardPc }