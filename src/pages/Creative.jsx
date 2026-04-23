import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const interests = [
  {
    icon: '✏️',
    title: 'Sketching',
    desc: 'From quick doodles to detailed illustrations, sketching is my meditative practice. I love capturing ideas on paper before they become digital.',
    color: 'from-[#FADADD] to-rose-100',
    border: 'border-rose-200',
    tag: 'Art & Expression',
  },
  {
    icon: '🖌️',
    title: 'Designing',
    desc: 'Design is my language. Whether it\'s a brand identity or a social post, I bring intentionality and beauty to every pixel.',
    color: 'from-[#E6E6FA] to-purple-100',
    border: 'border-purple-200',
    tag: 'Creative Work',
  },
  {
    icon: '🎬',
    title: 'Video Editing',
    desc: 'I love crafting stories through video, cutting clips to music, adding transitions, and creating content that resonates with viewers.',
    color: 'from-[#FFE5B4] to-amber-100',
    border: 'border-amber-200',
    tag: 'Storytelling',
  },
  {
    icon: '🤖',
    title: 'Learning AI Tools',
    desc: 'Fascinated by the intersection of creativity and technology, I constantly explore new AI tools that enhance design and content workflows.',
    color: 'from-[#F5F5DC] to-yellow-100',
    border: 'border-yellow-200',
    tag: 'Tech & Innovation',
  },
  {
    icon: '🎾',
    title: 'Tennis',
    desc: 'Off-screen, you\'ll find me on the tennis court. The discipline, strategy, and energy of the game keeps me sharp and focused.',
    color: 'from-green-100 to-emerald-100',
    border: 'border-green-200',
    tag: 'Sport & Wellness',
  },
];

const funFacts = [
  '🎨 I believe every design tells a story',
  '🌸 Pink is my creative superpower',
  '☕ Best ideas happen with a warm drink',
  '🎵 Music makes editing 10x better',
  '🌙 Night owl by creative nature',
  '📚 Always reading about design trends',
];

export default function Creative() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#FFE5B4]/30 via-transparent to-[#FADADD]/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Beyond the Portfolio"
            title="Creative Interests"
            subtitle="The passions, hobbies, and curiosities that make me who I am."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {interests.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, rotate: 0.5 }}
                  className={`rounded-3xl p-8 bg-gradient-to-br ${item.color} border ${item.border} shadow-sm hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-6xl mb-5 inline-block"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-xs font-inter font-semibold uppercase tracking-wider text-muted-foreground block mb-2">{item.tag}</span>
                  <h3 className="font-playfair text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Fun Facts */}
          <AnimatedSection>
            <div className="glass rounded-3xl p-10 border border-rose-100 shadow-sm">
              <h3 className="font-playfair text-3xl font-semibold text-center mb-8">
                Fun Facts About Me
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {funFacts.map((fact, i) => (
                  <motion.div
                    key={fact}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 hover:bg-white/90 transition-colors"
                  >
                    <span className="font-inter text-sm text-foreground/80">{fact}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}