import { Link } from 'react-router-dom';
import { ChevronDown, Music2, Globe2, Mic2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-cream animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D0C13] to-[#1C1C1E]" />
        
        {/* Background Image Placeholder */}
        <img 
          src="/src/assets/Img/KAV03957.webp" 
          alt="Concert Background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />

        <div className="relative z-10 flex flex-col items-center text-center px-4 animate-slide-up">
          <p className="font-body text-gold tracking-[0.25em] text-sm md:text-base uppercase mb-6">
            Carnatic Vocalist · Composer · Guru
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 drop-shadow-lg">
            Vidushi Smt. Vasudha Ravi
          </h1>
          <p className="font-display italic text-gold text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            "A voice that carries both technical finesse and heartfelt devotion"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/concerts" 
              className="border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3 font-body uppercase tracking-wider text-sm transition-all duration-300"
            >
              Explore Concerts
            </Link>
            <Link 
              to="/contact" 
              className="border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3 font-body uppercase tracking-wider text-sm transition-all duration-300"
            >
              Book a Performance
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gold opacity-80">
          <span className="font-body text-xs tracking-[0.2em] mb-2">SCROLL</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Intro Strip */}
      <section className="bg-parchment py-12 border-y border-gold/20">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gold/30">
          <div className="py-4 md:py-0 flex flex-col justify-center">
            <h3 className="font-display text-3xl text-burgundy mb-2">25+ Years</h3>
            <p className="font-body text-charcoal/80 uppercase tracking-widest text-xs">of Performance</p>
          </div>
          <div className="py-4 md:py-0 flex flex-col justify-center">
            <h3 className="font-display text-3xl text-burgundy mb-2">A-Grade Artist</h3>
            <p className="font-body text-charcoal/80 uppercase tracking-widest text-xs">All India Radio, Chennai</p>
          </div>
          <div className="py-4 md:py-0 flex flex-col justify-center">
            <h3 className="font-display text-3xl text-burgundy mb-2">6 Countries</h3>
            <p className="font-body text-charcoal/80 uppercase tracking-widest text-xs">International Concerts</p>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Design */}
      <section className="py-32 bg-cream relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Large Musical Icon Overlay (Watermark) */}
        <div className="absolute top-20 right-[-100px] md:right-[-50px] opacity-[0.05] pointer-events-none select-none">
          <svg width="600" height="800" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M100 250C120 250 140 230 140 200C140 160 100 140 80 120C60 100 50 80 50 60C50 30 70 10 100 10C130 10 150 30 150 60C150 70 145 80 140 85L140 250C140 270 120 290 100 290C80 290 60 270 60 240C60 210 80 190 100 190" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Left: Image with Decorative Frame */}
            <div className="w-full lg:w-1/2 relative animate-on-scroll">
              <div className="relative group max-w-[480px] mx-auto lg:ml-0">
                {/* Decorative Offset Frame */}
                <div className="absolute -top-8 -left-8 w-full h-full border border-gold/40 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
                
                {/* Main Image Container */}
                <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl bg-parchment">
                  <img
                    src="/src/assets/Img/KAV04223.webp"
                    alt="Vidushi Vasudha Ravi"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>

                {/* Floating Credential */}
                <div className="absolute -bottom-6 -right-6 z-20 bg-burgundy p-6 shadow-xl border-l-[3px] border-gold transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-gold-light mb-1">Honored as</p>
                  <p className="font-display text-lg text-cream leading-tight">A-Grade Artist of <br />All India Radio</p>
                </div>

                {/* Accent Circle */}
                <div className="absolute -top-10 -right-10 w-24 h-24 border border-gold/20 rounded-full animate-pulse pointer-events-none" />
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gold" />
                <span className="font-body text-gold uppercase tracking-[0.25em] text-xs font-semibold">The Artist</span>
              </div>
              
              <h2 className="font-display text-5xl lg:text-6xl text-charcoal mb-8 leading-[1.1]">
                A Luminous Voice in <br />
                <span className="italic text-burgundy">Carnatic Tradition</span>
              </h2>

              <div className="relative max-w-2xl mb-12">
                <span className="absolute -top-10 -left-6 font-display text-[120px] text-gold/10 leading-none select-none">"</span>
                <p className="font-body text-xl text-charcoal/80 leading-relaxed italic mb-8 relative z-10">
                  Her performances are described as chaste, unhurried, and deeply melodic—renowned for raga alapanas that resonate with spiritual depth.
                </p>
                <div className="h-[1px] w-full bg-gradient-to-r from-gold/40 to-transparent mb-8" />
                <p className="font-body text-lg text-charcoal/70 leading-relaxed">
                  In a tradition where lineage and purity are vital, Vidushi Smt. Vasudha Ravi stands as an exemplar of technical finesse and heartfelt devotion. For over 25 years, her music has carried the legacy of her gurus to audiences worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <Link 
                  to="/about" 
                  className="bg-charcoal text-cream hover:bg-gold hover:text-charcoal px-10 py-4 font-body uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-lg hover:shadow-gold/20"
                >
                  Read Her Full Story
                </Link>
                <Link 
                  to="/media" 
                  className="group flex items-center gap-3 font-body text-burgundy uppercase tracking-widest text-xs font-semibold transition-colors hover:text-gold"
                >
                  <span className="border-b border-burgundy/30 group-hover:border-gold pb-1">View Gallery</span>
                  <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Highlights - Musical Staff Design */}
      <section className="py-32 bg-parchment relative overflow-hidden">
        {/* Decorative Staff Lines */}
        <div className="absolute top-[60%] left-0 w-full h-[100px] flex flex-col justify-between opacity-10 pointer-events-none">
          <div className="h-[1px] w-full bg-gold" />
          <div className="h-[1px] w-full bg-gold translate-x-10" />
          <div className="h-[1px] w-full bg-gold" />
          <div className="h-[1px] w-full bg-gold -translate-x-10" />
          <div className="h-[1px] w-full bg-gold" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-gold/50" />
              <span className="font-body text-gold uppercase tracking-[0.3em] text-xs font-bold">Milestones</span>
              <span className="w-12 h-[1px] bg-gold/50" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal">Musical Milestones</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gold/10 bg-cream/50 backdrop-blur-sm">
            {[
              { 
                num: '01',
                title: 'Thematic Concerts', 
                icon: <Music2 className="w-6 h-6" />,
                desc: 'Known for bespoke presentations like Ramana Geethams, Tri-Shakthi, DASHA, and Sri Rama Vaibhavam.' 
              },
              { 
                num: '02',
                title: 'International Stage', 
                icon: <Globe2 className="w-6 h-6" />,
                desc: 'Acclaimed performances at Musica Sacra Festival, Germany, and collaborations with the Bavarian Youth Jazz Orchestra.' 
              },
              { 
                num: '03',
                title: 'Ponniyin Selvan', 
                icon: <Mic2 className="w-6 h-6" />,
                desc: 'Lent her silken voice to AR Rahman\'s magnum opus musical production, bringing classical grace to the big screen.' 
              },
            ].map((card, i) => (
              <div 
                key={i} 
                className={`p-10 lg:p-14 relative group border-gold/10 overflow-hidden transition-all duration-500 hover:bg-cream
                  ${i < 2 ? 'md:border-r' : ''} 
                  ${i !== 0 ? 'border-t md:border-t-0' : ''}
                `}
              >
                {/* Background Large Number */}
                <span className="absolute -bottom-4 -right-2 font-display text-9xl text-gold/5 italic select-none pointer-events-none transition-all duration-700 group-hover:text-gold/10 group-hover:-translate-y-4">
                  {card.num}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-cream transition-all duration-500">
                      {card.icon}
                    </div>
                    <div className="h-[1px] flex-grow bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
                  </div>
                  
                  <h3 className="font-display text-2xl lg:text-3xl text-charcoal mb-4 group-hover:text-burgundy transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body text-charcoal/60 leading-relaxed text-lg min-h-[100px]">
                    {card.desc}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-burgundy/40 uppercase tracking-widest text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span>Explore Legacy</span>
                    <span className="text-sm">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Marquee */}
      <section className="py-12 bg-charcoal overflow-hidden border-y-[3px] border-gold">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-[marquee_30s_linear_infinite] inline-block font-display text-xl text-gold-light/90 italic tracking-wider">
            Sangeetha Kala Ratnam 2024 · Best Vocalist The Music Academy 2024 · Bharat Ratna M.S.Subbulakshmi Endowment Award 2023 · Shanmukha Sangeetha Shironmani 2019 · D.K.Pattammal Award of Excellence 2013 · Yuva Kala Bharathi 2008 · Child Prodigy – Lions Club 1997 ·&nbsp;
          </div>
          <div className="animate-[marquee_30s_linear_infinite] inline-block font-display text-xl text-gold-light/90 italic tracking-wider">
            Sangeetha Kala Ratnam 2024 · Best Vocalist The Music Academy 2024 · Bharat Ratna M.S.Subbulakshmi Endowment Award 2023 · Shanmukha Sangeetha Shironmani 2019 · D.K.Pattammal Award of Excellence 2013 · Yuva Kala Bharathi 2008 · Child Prodigy – Lions Club 1997 ·&nbsp;
          </div>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-noise opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Press</span>
          <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-16">In The Media</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { pub: 'The Hindu', year: '2022', quote: 'Mix of Training and Talent' },
              { pub: 'The Hindu', year: '2023', quote: 'Concert was an Ode to the MLV Bani' },
              { pub: 'The Hindu', year: '2024', quote: 'Graceful and Melodious' },
            ].map((item, i) => (
              <div key={i} className="pl-8 border-l-2 border-gold relative">
                <span className="absolute top-0 -left-4 font-display text-6xl text-gold/20 leading-none">"</span>
                <h3 className="font-display text-2xl text-charcoal mb-4 italic">"{item.quote}"</h3>
                <p className="font-body text-sm text-muted uppercase tracking-wider">{item.pub} — {item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Teaser */}
      <section className="py-16 bg-burgundy text-center border-t border-gold/30">
        <h3 className="font-display italic text-3xl md:text-4xl text-cream mb-8 font-light">
          "Every concert is an offering, not a performance."
        </h3>
        <Link 
          to="/contact" 
          className="inline-block px-10 py-3 bg-cream text-burgundy hover:bg-gold hover:text-charcoal font-body uppercase tracking-wider text-sm transition-all shadow-md"
        >
          Contact for Bookings
        </Link>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </div>
  );
}
