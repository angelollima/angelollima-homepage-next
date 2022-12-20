import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function CloseNavBar(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <HiX onClick={props.onClick} className="border border-transparent_border text_hover rounded-lg cursor-pointer" size={36} />
    </motion.div>
  )
}
