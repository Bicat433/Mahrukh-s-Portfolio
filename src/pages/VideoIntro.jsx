import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';

export default function VideoIntro() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#E6E6FA]/30 via-transparent to-[#FFE5B4]/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-inter font-semibold uppercase tracking-[0.2em] text-rose-400 block mb-4">Meet Mahrukh</span>
            <h1 className="font-playfair text-5xl md:text-7xl font-semibold">
              Video <span className="italic text-rose-400">Introduction</span>
            </h1>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video placeholder */}
            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl shadow-rose-100"
              >
                <iframe
                  src="https://drive.google.com/file/d/1c2UzWW7my-STaxc-iEgppUZyZ7aejoFR/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </motion.div>
            </AnimatedSection>

            {/* Text content */}
            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="font-playfair text-3xl font-semibold mb-6">
                A little bit about <span className="italic text-rose-400">me</span>
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  Hi! I'm Mahrukh Khan, a creative professional passionate about visual design, content creation, and digital storytelling.
                </p>
                <p>
                  In this short introduction, I share a glimpse into my creative journey, my approach to design, and what drives me to create work that truly connects with people.
                </p>
                <p>
                  From my early sketches to polished digital creations, every project I take on is infused with care, creativity, and a commitment to excellence.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Based in', value: 'Saudi Arabia' },
                  { label: 'Available for', value: 'Freelance & Collab' },
                  { label: 'Speaks', value: 'English & Urdu' },
                  { label: 'Passion', value: 'Creative Design' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 rounded-2xl bg-white/60 border border-rose-100">
                    <p className="font-inter text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="font-inter font-medium text-foreground mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>


        </div>
      </section>
    </PageLayout>
  );
}