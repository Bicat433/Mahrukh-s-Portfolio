import { motion } from 'framer-motion';
import { Download, Mail, Phone, Linkedin } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import GlowButton from '../components/GlowButton';

const education = [
  { year: '2022-2026', degree: 'Bachelors in Media & Communication', school: 'Middlesex University | Dubai, United Arab Emirates', desc: 'Exploring digital media, communication, branding, and content strategy in a dynamic international environment.' },
  { year: '2021', degree: 'High School Graduation, Psychology, Education & Home Economics', school: 'Pakistan International School Jeddah English Section | Jeddah, Saudi Arabia', desc: '' },
  { year: 'Feb 2023', degree: 'Certificate of Achievement, Research Process', school: 'Middlesex University Dubai Library', desc: 'Completed an online course on An Introduction to the Research Process, delivered by Middlesex University Dubai Library.', cert: 'https://media.base44.com/images/public/69e875335e0d875990564896/4ef7f2546_Mahrukhcertificate.jpg' },
];

const experience = [
  { year: 'June 2024', role: 'Participant, L\'Oréal Brandstorm 2024', org: 'L\'Oréal (EOCCS Certified Competition)', desc: 'Participated in the world\'s only certified youth innovation competition by L\'Oréal. Developed and pitched innovative brand ideas on a global stage.', cert: 'https://media.base44.com/images/public/69e875335e0d875990564896/8fe85af20_Mahrukhcertificate2.jpg' },
  { year: '2023-2024', role: 'Creator, Stylii AI Hair App (Academic Project)', org: 'Middlesex University Dubai', desc: 'Conceptualised and developed a business idea for an AI-powered hair styling mobile app. Designed branding, ads, color theory, and full business scope. Student no: M00910136.' },
  { year: 'Freelance', role: 'Fashion Event Collaborator', org: 'Freelance', desc: 'Worked on over 30 freelance projects, showcasing multiple designers\' collections at international fashion events.' },
  {
    year: '09/2021 - 02/2022', role: 'Kindergarten Teacher', org: 'Jeddah Grammar International School | Jeddah, Saudi Arabia',
    bullets: [
      'Developed and implemented engaging lesson plans aligned with early childhood curriculum standards.',
      'Created a positive and nurturing learning environment for young children.',
      'Assisted children with daily activities, including mealtimes, nap times, and outdoor play.',
      'Collaborated with parents to monitor children\'s progress and address any concerns.',
    ]
  },
  {
    year: '2015 - Present', role: 'Tennis Coach', org: 'Self Employed | Jeddah, Saudi Arabia',
    bullets: [
      'Provided personalized tennis coaching to children of various ages and skill levels.',
      'Developed training plans and implemented effective coaching techniques.',
      'Motivated and encouraged students to achieve their full potential.',
      'Achieved 90% student satisfaction rate by customizing lesson plans based on feedback.',
    ]
  },
];

const extracurricular = [
  {
    year: '2014', role: 'Student Council Member', org: 'Pakistan International School Jeddah English Section | Jeddah, Saudi Arabia',
    bullets: [
      'Represented the student body in various committees and meetings.',
      'Contributed to the development of school policies and initiatives.',
    ]
  },
];

const skills = {
  'Software': ['Canva', 'CapCut', 'PowerPoint', 'Microsoft Word', 'AI Tools'],
  'Creative': ['Visual Design', 'Content Creation', 'Video Editing', 'Brand Identity'],
  'Strategy': ['Social Media Strategy', 'Storytelling', 'Content Planning', 'Audience Research'],
  'Languages': ['English', 'Urdu', 'Arabic (Basic)'],
};

export default function CV() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
            <AnimatedSection>
              <span className="text-xs font-inter font-semibold uppercase tracking-[0.2em] text-rose-400 block mb-3">Resume</span>
              <h1 className="font-playfair text-5xl font-semibold">Curriculum Vitae</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <GlowButton href="mailto:mahrukhkhann923@gmail.com">
                <Download size={16} />
                Request CV PDF
              </GlowButton>
            </AnimatedSection>
          </div>

          {/* Header Card */}
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-to-br from-[#FADADD] to-[#E6E6FA] p-8 mb-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl flex-shrink-0">
                🌸
              </div>
              <div>
                <h2 className="font-playfair text-3xl font-semibold">Mahrukh Khan</h2>
                <p className="font-inter text-muted-foreground mt-1 mb-4">Creative Professional · Content Creator · Visual Designer</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:mahrukhkhann923@gmail.com" className="flex items-center gap-2 text-sm font-inter text-foreground/70 hover:text-rose-400 transition-colors">
                    <Mail size={14} /> mahrukhkhann923@gmail.com
                  </a>
                  <a href="tel:+966554639166" className="flex items-center gap-2 text-sm font-inter text-foreground/70 hover:text-rose-400 transition-colors">
                    <Phone size={14} /> +966 55 463 9166
                  </a>
                  <a href="https://www.linkedin.com/in/mahrukh-khan-0780aa366" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-inter text-foreground/70 hover:text-rose-400 transition-colors">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-3xl p-8 mb-6 border border-rose-50 shadow-sm">
              <h3 className="font-playfair text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">🎓</span> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 pb-6 border-b border-rose-50 last:border-0 last:pb-0"
                  >
                    <div className="flex-shrink-0">
                      <span className="font-inter text-xs font-semibold text-rose-400 bg-rose-50 px-3 py-1.5 rounded-full whitespace-nowrap">{edu.year}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-foreground">{edu.degree}</h4>
                      <p className="font-inter text-sm text-rose-400 mt-0.5">{edu.school}</p>
                      <p className="font-inter text-sm text-muted-foreground mt-1">{edu.desc}</p>
                      {edu.cert && (
                        <a href={edu.cert} target="_blank" rel="noopener noreferrer">
                          <img src={edu.cert} alt="Certificate" className="mt-3 rounded-xl max-w-xs w-full border border-rose-100 shadow-sm hover:shadow-md transition-shadow" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-3xl p-8 mb-6 border border-rose-50 shadow-sm">
              <h3 className="font-playfair text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">💼</span> Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 pb-6 border-b border-rose-50 last:border-0 last:pb-0"
                  >
                    <div className="flex-shrink-0">
                      <span className="font-inter text-xs font-semibold text-rose-400 bg-rose-50 px-3 py-1.5 rounded-full">{exp.year}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-foreground">{exp.role}</h4>
                      <p className="font-inter text-sm text-rose-400 mt-0.5">{exp.org}</p>
                      <p className="font-inter text-sm text-muted-foreground mt-1">{exp.desc}</p>
                       {exp.bullets && exp.bullets.length > 0 && (
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="font-inter text-sm text-muted-foreground">{b}</li>
                          ))}
                        </ul>
                      )}
                      {exp.cert && (
                        <a href={exp.cert} target="_blank" rel="noopener noreferrer">
                          <img src={exp.cert} alt="Certificate" className="mt-3 rounded-xl max-w-xs w-full border border-rose-100 shadow-sm hover:shadow-md transition-shadow" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Extracurricular */}
          <AnimatedSection delay={0.25}>
            <div className="glass rounded-3xl p-8 mb-6 border border-rose-50 shadow-sm">
              <h3 className="font-playfair text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">🌟</span> Extracurricular Activities
              </h3>
              <div className="space-y-6">
                {extracurricular.map((item, i) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 pb-6 border-b border-rose-50 last:border-0 last:pb-0"
                  >
                    <div className="flex-shrink-0">
                      <span className="font-inter text-xs font-semibold text-rose-400 bg-rose-50 px-3 py-1.5 rounded-full">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-foreground">{item.role}</h4>
                      <p className="font-inter text-sm text-rose-400 mt-0.5">{item.org}</p>
                      {item.bullets && (
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          {item.bullets.map((b, bi) => (
                            <li key={bi} className="font-inter text-sm text-muted-foreground">{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection delay={0.3}>
            <div className="glass rounded-3xl p-8 border border-rose-50 shadow-sm">
              <h3 className="font-playfair text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">⚡</span> Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-inter text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <span key={skill} className="font-inter text-xs bg-rose-50 border border-rose-100 text-foreground/70 px-3 py-1.5 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}