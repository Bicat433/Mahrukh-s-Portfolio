import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2022-Present', title: 'BA Business Management with Marketing', desc: 'Studying at Middlesex University Dubai, exploring branding, advertising, digital media, and entrepreneurship.', color: 'bg-rose-200' },
  { year: 'June 2024', title: 'L\'Oréal Brandstorm 2024 Participant', desc: 'Competed in the world\'s only certified youth innovation competition by L\'Oréal, EOCCS certified. Pitched creative brand innovation on a global stage.', color: 'bg-[#E6E6FA]' },
  { year: '2023-2024', title: 'Stylii AI App Project', desc: 'Created a full business concept for an AI-powered hair styling app, including branding, ad campaigns, and color theory research.', color: 'bg-[#FFE5B4]' },
  { year: 'Feb 2023', title: 'Research Process Certificate', desc: 'Completed Middlesex University Dubai Library\'s online course on Introduction to the Research Process.', color: 'bg-[#F5F5DC]' },
];

const values = [
  { icon: '🎨', title: 'Creativity First', desc: 'Every project starts with a creative vision that sets it apart.' },
  { icon: '✨', title: 'Attention to Detail', desc: 'Precision and care go into every visual element I create.' },
  { icon: '💡', title: 'Always Learning', desc: 'Constantly exploring new tools, trends, and creative techniques.' },
  { icon: '🤝', title: 'Collaborative Spirit', desc: 'I love working with others to bring ideas to life together.' },
];
const profileImageUrl = 'https://lh3.googleusercontent.com/d/1-AmhlOTMwGk_kpnf7dOCHD94bvUKsPhX';

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#FADADD]/30 via-[#E6E6FA]/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-xs font-inter font-semibold uppercase tracking-[0.2em] text-rose-400 block mb-4">Get to Know Me</span>
            <h1 className="font-playfair text-5xl md:text-7xl font-semibold mb-6">
              About <span className="italic text-rose-400">Mahrukh</span>
            </h1>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              A passionate creative professional blending aesthetics with purpose, design with strategy, and passion with professionalism.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Personal Intro */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="w-full h-[420px] max-w-sm mx-auto rounded-3xl shadow-xl overflow-hidden bg-rose-50">
                <img
                  src={profileImageUrl}
                  alt="Mahrukh Khan portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFE5B4] rounded-2xl flex items-center justify-center text-2xl shadow-lg"
              >
                ✨
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2}>
            <h2 className="font-playfair text-3xl font-semibold mb-6">Hi, I'm Mahrukh!</h2>
            <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
            <p>
              I'm Mahrukh Khan, a Business Management with Marketing student at Middlesex University Dubai, a creative at heart with a passion for visual design, content creation, and brand storytelling.
            </p>
            <p>
              From developing the <strong className="text-foreground">Stylii AI Hair App</strong> concept to competing in <strong className="text-foreground">L'Oréal Brandstorm 2024</strong>, I bring ideas to life with creativity, research, and an eye for detail.
            </p>
            <p>
              I work with Canva, CapCut, PowerPoint, and AI tools to create content that looks beautiful and communicates with purpose. Off-screen, I sketch, play tennis, and explore the latest in creative tech.
            </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: '2+', label: 'Years at MDX Dubai' },
                { num: '3+', label: 'Projects Completed' },
                { num: '2', label: 'Certificates Earned' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-rose-50 border border-rose-100">
                  <p className="font-playfair text-2xl font-bold text-rose-400">{num}</p>
                  <p className="font-inter text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#E6E6FA]/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="What drives me" title="My Values" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow h-full"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-playfair text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="My Journey" title="Timeline" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 to-transparent" />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.15} className="relative pl-20 mb-10">
                <div className={`absolute left-5 top-3 w-6 h-6 rounded-full ${item.color} border-2 border-white shadow-md`} />
                <div className="glass rounded-2xl p-6 shadow-sm">
                  <span className="text-xs font-inter font-semibold text-rose-400 tracking-wider">{item.year}</span>
                  <h3 className="font-playfair text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}