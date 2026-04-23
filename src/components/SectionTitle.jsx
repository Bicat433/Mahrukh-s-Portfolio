import AnimatedSection from './AnimatedSection';

export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <AnimatedSection className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="text-xs font-inter font-semibold uppercase tracking-[0.2em] text-rose-400 mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground font-inter text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}