export default function PageHero({ title, subtitle, bgImage = '/src/assets/Img/KAV03953.webp' }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Pattern Placeholder */}
      <div className="absolute inset-0 bg-charcoal" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-slide-up">
        {subtitle && (
          <p className="font-body text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-display text-5xl md:text-7xl text-cream font-light">
          {title}
        </h1>
        <div className="w-24 h-[1px] bg-gold mx-auto mt-8 opacity-50" />
      </div>
    </section>
  );
}
