import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    id: 1,
    title: 'Stylii; AI Hair Styling App',
    category: 'Brand & Product Design',
    description: 'Conceptualised a full AI-powered hair styling mobile app; from brand identity and color theory to advertising campaigns and business scope.',
    fullDesc: 'Stylii is a revolutionary AI hair styling app concept created as an academic business project at Middlesex University Dubai. The app lets users virtually try hairstyles using AI before their actual haircut. The project included brand identity, logo design, color theory (pink & white palette), visual research, and three complete ad campaigns.',
    skills: ['Canva', 'Branding', 'AI Tools', 'PowerPoint', 'Visual Storytelling'],
    image: 'https://media.base44.com/images/public/69e875335e0d875990564896/163e7d212_Project.jpg',
    gradient: 'from-[#FADADD] to-[#E6E6FA]',
    accent: 'bg-rose-100',
  },
  {
    id: 2,
    title: 'Stylii Ad Campaign Series',
    category: 'Advertising & Content',
    description: 'A series of 3 bold, pink-branded social media ads for the Stylii AI app; designed for Instagram & digital marketing with strong visual impact.',
    fullDesc: 'Created three complete advertisement designs for Stylii using Canva. Each ad targeted a different angle: brand awareness (Ad 1; dramatic pink explosion), service showcase (Ad 2; hair services list), and app download CTA (Ad 3; lifestyle model). The ads use a cohesive dark pink & black palette with bold typography.',
    skills: ['Canva', 'Social Media Strategy', 'Content Creation', 'Branding'],
    image: 'https://media.base44.com/images/public/69e875335e0d875990564896/8fbaac034_project2.jpg',
    gradient: 'from-[#E6E6FA] to-[#FFE5B4]',
    accent: 'bg-purple-100',
  },
  {
    id: 3,
    title: 'Project Rev Aurora',
    category: 'Campaign Strategy',
    description: 'A strategic marketing campaign project combining customer persona research, H&M collaboration concepts, and AI booth design for a fashion-forward brief.',
    fullDesc: 'Project Rev Aurora was a comprehensive marketing strategy project featuring detailed customer persona development, a creative H&M x Thrift Store Pop-Up Show concept, and an AI styling booth (HM x StylGenie). The project demonstrated research, visual storytelling, and campaign thinking from ideation to execution.',
    skills: ['Content Creation', 'Social Media Strategy', 'Visual Storytelling', 'Branding & Design Thinking'],
    image: 'https://media.base44.com/images/public/69e875335e0d875990564896/24c70dc21_revauroroa.png',
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