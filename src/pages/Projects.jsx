import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    id: 1,
    title: 'Stylii',
    category: 'Brand & Product Design',
    description: 'Stylii is an AI-powered hair styling app concept developed for an academic business project at Middlesex University Dubai, helping users virtually try hairstyles before committing to a haircut.',
    fullDesc: 'The project focused on building a strong brand identity through logo design, a cohesive pink-and-white color palette, and visual research aligned with the target audience. It also included three complete advertising campaigns to communicate the app’s value proposition across multiple marketing channels.',
    skills: ['Brand Identity', 'Logo Design', 'Visual Research', 'Campaign Design', 'AI Concept Development'],
    image: 'https://drive.google.com/thumbnail?id=1506_mYk5ekoD1cCYj9NP2rU5BN77vITr&sz=w2000',
    gradient: 'from-[#FADADD] to-[#E6E6FA]',
    accent: 'bg-rose-100',
  },
  {
    id: 2,
    title: 'StyleGenie',
    category: 'UI/UX & Fashion Tech Concept',
    description: 'StyleGenie is an AI-driven fashion assistant concept that helps users discover and refine personal style across mobile and web retail experiences.',
    fullDesc: 'The concept explores AI integration with established retail ecosystems through H&M-inspired mock interfaces. It introduces a virtual stylist, digital wardrobe, and eco-impact insights so users can curate outfits, track clothing usage, and make more sustainable fashion choices, with a strong emphasis on UI/UX, visual storytelling, and cohesive campaign-style branding.',
    skills: ['UI/UX Design', 'Visual Storytelling', 'Fashion Tech Concepts', 'Sustainability Messaging', 'Brand Integration'],
    image: 'https://drive.google.com/thumbnail?id=11FBdkfoLJDQPRveIWdClczxnEaS2TcWV&sz=w2000',
    gradient: 'from-[#E6E6FA] to-[#FFE5B4]',
    accent: 'bg-purple-100',
  },
  {
    id: 3,
    title: 'Rev. Aurora',
    category: 'Branding & Marketing Concept',
    description: 'Rev. Aurora is a sustainable skincare brand concept built around eco-conscious beauty products made with natural, organic ingredients and premium positioning.',
    fullDesc: 'The project delivered end-to-end brand development, including mission, vision, target audience analysis, and brand personality. A full visual identity system was created with logo design, soft pink/white/neutral color psychology, and elegant typography. It also covered packaging, advertising direction, digital presence through sample website and campaigns, plus unique mascot elements for stronger emotional engagement and recall.',
    skills: ['Brand Strategy', 'Visual Identity Design', 'Packaging Concept', 'Marketing Direction', 'Digital Campaign Development'],
    image: 'https://drive.google.com/thumbnail?id=1n9s2rNCcB5a0NQlNWZUtQRgJs4B9MeGD&sz=w2000',
    gradient: 'from-[#FFE5B4] to-[#FADADD]',
    accent: 'bg-amber-100',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#FADADD]/30 via-transparent to-[#E6E6FA]/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="My Work"
            title="Featured Projects"
            subtitle="A curated selection of my most meaningful creative work."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelected(p)}
                  className="cursor-pointer group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-rose-100 transition-all duration-300 bg-white border border-rose-50"
                >
                  <div className="h-52 relative overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block text-xs font-inter font-semibold uppercase tracking-wider text-rose-400 px-3 py-1 rounded-full ${p.accent} mb-3`}>
                      {p.category}
                    </span>
                    <h3 className="font-playfair text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.skills.slice(0, 2).map(s => (
                        <span key={s} className="text-xs font-inter bg-muted px-2 py-1 rounded-full text-muted-foreground">{s}</span>
                      ))}
                      {p.skills.length > 2 && (
                        <span className="text-xs font-inter bg-muted px-2 py-1 rounded-full text-muted-foreground">+{p.skills.length - 2}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              <div className="h-80 relative overflow-hidden">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover object-top" />
                <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center hover:bg-black/60 transition-colors text-white"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-8">
                <span className={`inline-block text-xs font-inter font-semibold uppercase tracking-wider text-rose-400 px-3 py-1 rounded-full ${selected.accent} mb-4`}>
                  {selected.category}
                </span>
                <h2 className="font-playfair text-2xl font-semibold mb-3">{selected.title}</h2>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6">{selected.fullDesc}</p>
                <div>
                  <p className="text-xs font-inter font-semibold uppercase tracking-wider text-rose-400 mb-3">Skills Used</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.skills.map(s => (
                      <span key={s} className="text-xs font-inter bg-rose-50 border border-rose-100 text-rose-400 px-3 py-1.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}