import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GlowButton({ children, to, href, variant = 'primary', onClick, className = '' }) {
  const base = `inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-medium text-sm transition-all duration-300 cursor-pointer ${className}`;
  const styles = {
    primary: 'bg-rose-400 text-white hover:bg-rose-500 shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:shadow-xl',
    outline: 'border-2 border-rose-300 text-rose-400 hover:bg-rose-50',
    ghost: 'text-rose-400 hover:bg-rose-50',
  };

  const inner = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <button onClick={onClick}>{inner}</button>;
}