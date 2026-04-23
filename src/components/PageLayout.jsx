import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </motion.div>
  );
}