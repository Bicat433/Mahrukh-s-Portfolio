import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import GlowButton from '../components/GlowButton';
import SectionTitle from '../components/SectionTitle';

const skills = [
  { icon: '🎨', label: 'Canva & Design' },
  { icon: '🎬', label: 'Video Editing' },
  { icon: '🤖', label: 'AI Tools' },
  { icon: '📊', label: 'PowerPoint' },
  { icon: '📱', label: 'Content Creation' },
  { icon: '✨', label: 'Visual Storytelling' },
];

const interests = [
  { icon: '✏️', label: 'Sketching' },
  { icon: '🎾', label: 'Tennis' },
  { icon: '🖌️', label: 'Designing' },
  { icon: '🤖', label: 'Learning AI' },
];
const profileImageUrl = 'https://lh3.googleusercontent.com/d/1-AmhlOTMwGk_kpnf7dOCHD94bvUKsPhX';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD] via-[#E6E6FA] to-[#FFE5B4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {/* Floating blobs */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-lavender-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 right-20 w-48 h-48 bg-[#FFE5B4]/50 rounded-full blur-2xl"
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-rose-200 text-rose-400 text-xs font-inter font-medium mb-8"
          >
            <Sparkles size={12} />
            Creative Professional & Storyteller
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-playfair text-6xl md:text-8xl font-semibold text-foreground leading-tight mb-6"
          >
            Mahrukh
            <br />
            <span className="italic text-rose-400">Khan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-inter text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting beautiful visuals, compelling content, and creative experiences
            that leave a lasting impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <GlowButton to="/projects">View Projects <ArrowRight size={16} /></GlowButton>
            <GlowButton to="/cv" variant="outline">Download CV</GlowButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-foreground/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick About */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl">
                <img src={profileImageUrl} alt="Mahrukh Khan" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFE5B4] rounded-2xl flex items-center justify-center text-3xl shadow-lg">✨</div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.2}>
            <span className="text-xs font-inter font-semibold uppercase tracking-[0.2em] text-rose-400 block mb-4">About Me</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              A creative soul with a passion for design
            </h2>
            <p className="font-inter text-muted-foreground leading-relaxed mb-8">
              Hi, I'm Mahrukh, a creative professional with a love for visual storytelling, design, and all things digital. I blend aesthetics with strategy to create content that connects and resonates.
            </p>
            <GlowButton to="/about" variant="outline">Learn More About Me</GlowButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="What I do" title="My Core Skills" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="glass rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <p className="font-inter font-medium text-sm text-foreground/80">{s.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Interests Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Beyond work" title="Creative Interests" subtitle="What fuels my creativity outside the professional sphere." />
          <div className="flex flex-wrap gap-4 justify-center">
            {interests.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-[#FADADD] to-[#E6E6FA] border border-rose-100 shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-inter font-medium text-sm text-foreground/80">{item.label}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <GlowButton to="/creative" variant="ghost">Explore More <ArrowRight size={16} /></GlowButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-14 shadow-xl border border-rose-100">
            <h2 className="font-playfair text-4xl font-semibold mb-4">Let's create something beautiful</h2>
            <p className="font-inter text-muted-foreground mb-8">Open to collaborations, projects, and creative opportunities.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <GlowButton to="/contact">Get In Touch</GlowButton>
              <GlowButton to="/cv" variant="outline">View CV</GlowButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}