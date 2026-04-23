import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const categories = [
  {
    title: 'Core Skills',
    color: 'from-[#FADADD] to-rose-100',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-500',
    skills: [
      { name: 'Microsoft PowerPoint', level: 90, icon: '📊' },
      { name: 'Microsoft Word', level: 88, icon: '📝' },
      { name: 'Canva', level: 95, icon: '🎨' },
      { name: 'CapCut', level: 85, icon: '🎬' },
      { name: 'AI Tools', level: 80, icon: '🤖' },
    ],
  },
  {
    title: 'Creative Skills',
    color: 'from-[#E6E6FA] to-purple-100',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-500',
    skills: [
      { name: 'Content Creation', level: 92, icon: '✍️' },
      { name: 'Social Media Strategy', level: 85, icon: '📱' },
      { name: 'Visual Storytelling', level: 90, icon: '🎭' },
      { name: 'Basic Video Editing', level: 85, icon: '✂️' },
      { name: 'Branding & Design Thinking', level: 82, icon: '💡' },
    ],
  },
];

function SkillBar({ name, level, icon, delay }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{icon}</span>
            <span className="font-inter text-sm font-medium text-foreground/80">{name}</span>
          </div>
          <span className="font-inter text-xs font-semibold text-muted-foreground">{level}%</span>
        </div>
        <div className="h-2 bg-white/80 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: delay + 0.3 }}
            className="h-full rounded-full bg-gradient-to-r from-rose-300 to-rose-400"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Skills() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#E6E6FA]/30 via-transparent to-[#FADADD]/20">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="My Expertise"
            title="Skills & Abilities"
            subtitle="A blend of technical tools and creative capabilities that I bring to every project."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, ci) => (
              <AnimatedSection key={cat.title} delay={ci * 0.2}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`rounded-3xl p-8 bg-gradient-to-br ${cat.color} border ${cat.border} shadow-sm`}
                >
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="font-playfair text-xl font-semibold">{cat.title}</h3>
                    <span className={`text-xs font-inter font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${cat.badge}`}>
                      {cat.skills.length} skills
                    </span>
                  </div>
                  {cat.skills.map((skill, si) => (
                    <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + si * 0.08} />
                  ))}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Floating skill pills */}
          <AnimatedSection delay={0.4} className="mt-16 text-center">
            <p className="font-playfair text-2xl font-semibold mb-8">Also Familiar With</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Google Slides', 'Figma Basics', 'Instagram Reels', 'TikTok Content', 'Email Marketing', 'Copywriting', 'Color Theory', 'Typography'].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.08 }}
                  className="font-inter text-sm px-5 py-2.5 rounded-full glass border border-rose-100 shadow-sm cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}