import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-rose-50 to-transparent border-t border-rose-100 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-playfair text-2xl font-semibold text-rose-400">Mahrukh Khan</p>
            <p className="text-muted-foreground text-sm mt-1 font-inter">Creative Professional</p>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: Mail, href: 'mailto:mahrukhkhann923@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+966554639166', label: 'Phone' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mahrukh-khan-0780aa366', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 hover:bg-rose-200 transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-rose-100 text-center">
          <p className="text-muted-foreground text-xs font-inter flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-rose-400 fill-rose-300" /> by Mahrukh Khan © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}