import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedSection from '../components/AnimatedSection';
import GlowButton from '../components/GlowButton';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:mahrukhkhann923@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahrukhkhann923@gmail.com', href: 'mailto:mahrukhkhann923@gmail.com', color: 'bg-rose-100 text-rose-400' },
    { icon: Phone, label: 'Phone', value: '+966 55 463 9166', href: 'tel:+966554639166', color: 'bg-purple-100 text-purple-400' },
    { icon: Linkedin, label: 'LinkedIn', value: 'mahrukh-khan-0780aa366', href: 'https://www.linkedin.com/in/mahrukh-khan-0780aa366', color: 'bg-blue-100 text-blue-400' },
    { icon: MapPin, label: 'Location', value: 'Saudi Arabia', href: null, color: 'bg-amber-100 text-amber-500' },
  ];

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#FADADD]/20 via-transparent to-[#E6E6FA]/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-inter font-semibold uppercase tracking-[0.2em] text-rose-400 block mb-4">Say Hello</span>
            <h1 className="font-playfair text-5xl md:text-7xl font-semibold mb-6">
              Get In <span className="italic text-rose-400">Touch</span>
            </h1>
            <p className="font-inter text-muted-foreground text-lg max-w-xl mx-auto">
              Open to freelance projects, collaborations, and creative opportunities. Let's make something beautiful together.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <AnimatedSection direction="right">
                <div className="space-y-4 mb-10">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                          className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/60 hover:border-rose-200 hover:shadow-md transition-all"
                        >
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                            <item.icon size={18} />
                          </div>
                          <div>
                            <p className="font-inter text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                            <p className="font-inter font-medium text-foreground text-sm">{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/60">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                            <item.icon size={18} />
                          </div>
                          <div>
                            <p className="font-inter text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                            <p className="font-inter font-medium text-foreground text-sm">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Availability badge */}
              <AnimatedSection delay={0.3}>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 border border-green-100">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
                  </div>
                  <p className="font-inter text-sm font-medium text-green-600">Currently available for new projects</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection direction="left" delay={0.2}>
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-white/60 shadow-sm">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Send a Message</h3>

                <div className="space-y-4">
                  <div>
                    <label className="font-inter text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 rounded-xl border border-rose-100 bg-white/80 font-inter text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-rose-100 bg-white/80 font-inter text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3.5 rounded-xl border border-rose-100 bg-white/80 font-inter text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-rose-400 text-white font-inter font-medium shadow-lg shadow-rose-200 hover:bg-rose-500 transition-colors"
                  >
                    {sent ? '✓ Message Sent!' : <><Send size={16} /> Send Message</>}
                  </motion.button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}