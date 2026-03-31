import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Music, Music2, Music3, Music4, Globe2, Mic2, Plus, Play, Award } from 'lucide-react';
import GoldDivider from '../components/GoldDivider';

// Moving StatCounter outside to prevent re-creation and infinite loops
const StatCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const endVal = parseInt(end);
    if (isNaN(endVal)) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * endVal), endVal);

      setCount(currentCount);

      if (currentCount < endVal) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

export default function Home() {
  const [activeReview, setActiveReview] = useState(1);
  const [activeGuruImage, setActiveGuruImage] = useState(0);
  const [activeDiscography, setActiveDiscography] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(null);

  // Auto-slide effect for Discography (Paused if video is open)
  useEffect(() => {
    if (activeVideoId) return;
    const timer = setInterval(() => {
      setActiveDiscography((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeVideoId]);
  
  const guruImages = [
    '/assets/Img/KAV04045.webp',
    '/assets/Img/KAV04146.webp',
    '/assets/Img/KAV03964.webp'
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGuruImage(prev => (prev + 1) % guruImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const reviews = [
    { 
      id: 1,
      pub: 'The Hindu', 
      year: '2024', 
      title: 'Graceful & Melodious',
      quote: 'A voice that carries both technical finesse and heartfelt devotion, standing as an exemplar of the tradition.', 
      image: '/assets/Img/KAV03931.webp',
      category: 'FESTIVAL REVIEW'
    },
    { 
      id: 2,
      pub: 'The Hindu', 
      year: '2023', 
      title: 'MLV Bani Revived',
      quote: 'Her concert was an ode to the MLV Bani, resonating with spiritual depth and technical brilliance.', 
      image: '/assets/Img/KAV03953.webp',
      category: 'CONCERT SERIES'
    },
    { 
      id: 3,
      pub: 'The Hindu', 
      year: '2022', 
      title: 'Training & Talent',
      quote: 'A perfect mix of training and talent, her performance was a masterclass in raga alapana.', 
      image: '/assets/Img/KAV03983.webp',
      category: 'PRESS CRITIQUE'
    },
  ];

  return (
    <div className="bg-cream animate-fade-in">
      {/* Hero Section - The Triple Segment Editorial Design (Edition 10) */}
      <section className="relative lg:h-[750px] min-h-screen flex items-stretch overflow-hidden bg-cream">
        {/* Unique Texture Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.4] pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,214,123,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" />
        
        {/* Triple Segment Organization */}
        <div className="flex flex-col lg:flex-row w-full h-full lg:pt-0">
           
           {/* Segment 1: The Brand Anchor (Left 20%) */}
           <div className="hidden lg:flex lg:w-[15%] border-r border-gold/10 flex-col items-center justify-center p-12 bg-cream/80 backdrop-blur-sm">
              <h2 className="font-display text-4xl lg:text-5xl text-charcoal/20 uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 font-black">VASUDHA RAVI</h2>
              <div className="mt-20 w-px h-24 bg-gold/20" />
           </div>

           {/* Segment 2: The Focal Arch (Center 55%) */}
           <div className="w-full lg:w-[55%] relative flex items-center justify-center bg-parchment/30 py-12 lg:py-0 px-8 lg:px-0 order-1 lg:order-2 border-r border-gold/10">
              {/* Giant Watermark Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] z-0">
                 <span className="font-display text-[60vh] font-black text-gold">RAVI</span>
              </div>

              <div className="relative z-10 w-full max-w-[500px] group">
                 {/* Double Frame Effect */}
                 <div className="absolute -inset-4 border border-gold/30 rounded-t-full translate-x-2 -translate-y-2 lg:translate-x-3 lg:-translate-y-3 pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
                 
                 <div className="relative aspect-[3/4] rounded-t-full overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-cream border-[12px]">
                    <img 
                      src="/assets/Img/KAV04223.webp" 
                      alt="Vidushi Vasudha Ravi - Editorial" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]"
                      loading="lazy"
                    />
                    {/* Radial Lens Flare Overlay */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
                 </div>

                 {/* AIR Label Overlay */}
                 <div className="absolute bottom-10 right-[-30px] bg-charcoal px-8 py-3 shadow-2xl z-20 rotate-90 origin-right translate-x-[50%]">
                    <span className="text-gold text-[10px] font-body uppercase tracking-[0.4em] font-black">LEGACY A-GRADE</span>
                 </div>
              </div>
           </div>

           {/* Segment 3: The Narrative (Right 30%) */}
            <div className="w-full lg:w-[30%] flex flex-col justify-center items-start text-left px-6 lg:px-16 py-24 lg:py-0 order-2 lg:order-3 bg-cream lg:bg-transparent animate-on-scroll">
               <div className="mb-8 flex flex-col items-start w-full">
                 <div className="inline-flex items-center gap-4 mb-4">
                    <Music size={14} className="text-burgundy" />
                    <span className="font-body text-burgundy uppercase tracking-[0.4em] text-[10px] font-black underline underline-offset-8">VOICE · SCHOLAR · GURU</span>
                 </div>

                  <h1 className="font-display text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-tight tracking-tighter mb-4">
                     Vasudha <span className="italic text-burgundy font-light ml-4 lg:ml-12">Ravi</span>
                  </h1>
                                  <div className="h-px w-20 bg-gold/30 mb-4 lg:mx-0" />

                  <p className="font-body text-charcoal/90 text-lg sm:text-xl leading-relaxed italic border-l-4 border-gold/40 pl-8 mb-8 w-full transition-colors duration-500 hover:text-charcoal">
                    "Three decades of artistic devotion, preserving the sacred architecture of Carnatic song for the global stage."
                  </p>
              </div>

               <div className="flex flex-row items-center flex-wrap gap-6 lg:gap-10 lg:items-start lg:ml-4">
                 <Link 
                   to="/concerts" 
                   className="group relative px-8 py-3 lg:px-12 lg:py-5 bg-charcoal text-cream overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                 >
                    <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 font-body uppercase tracking-[0.2em] text-[10px] font-black group-hover:text-charcoal transition-colors focus:outline-none">Listen & Explore</span>
                 </Link>

                 <Link 
                   to="/contact" 
                   className="font-body text-[10px] text-charcoal/60 hover:text-charcoal uppercase tracking-[0.4em] font-black border-b border-gold/40 transition-all pb-1 whitespace-nowrap"
                 >
                   Inquire Performance ↗
                 </Link>
              </div>
           </div>

        </div>

        {/* Global Catalog Labeling (Bottom Left) */}
        <div className="absolute bottom-10 right-10 flex items-center gap-10 opacity-30 pointer-events-none hidden lg:flex">
           <span className="font-body text-[9px] uppercase tracking-[1em]">CAT_REF: KAV04223</span>
           <div className="w-16 h-px bg-gold" />
           <span className="font-body text-[9px] uppercase tracking-[1em] italic text-gold">CHENNAI · 2024</span>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="bg-parchment py-10 border-y border-gold/20">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-2 md:gap-8 text-center divide-x divide-gold/15">
          <div className="py-2 md:py-0 md:px-4 flex flex-col justify-center items-center">
            <h3 className="font-display text-xl md:text-4xl text-burgundy mb-1">
              <StatCounter end="25" suffix="+" /> Years
            </h3>
            <p className="font-body text-charcoal/80 uppercase tracking-[0.2em] md:tracking-widest text-[8px] md:text-[10px] font-black">of Performance</p>
          </div>
          <div className="py-2 md:py-0 md:px-4 flex flex-col justify-center items-center">
            <h3 className="font-display text-xl md:text-4xl text-burgundy mb-1">A-Grade</h3>
            <p className="font-body text-charcoal/80 uppercase tracking-[0.2em] md:tracking-widest text-[8px] md:text-[10px] font-black">All India Radio</p>
          </div>
          <div className="py-2 md:py-0 md:px-4 flex flex-col justify-center items-center">
            <h3 className="font-display text-xl md:text-4xl text-burgundy mb-1">
              <StatCounter end="6" /> Countries
            </h3>
            <p className="font-body text-charcoal/80 uppercase tracking-[0.2em] md:tracking-widest text-[8px] md:text-[10px] font-black">International</p>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Design */}
      <section id="about" className="py-32 bg-cream relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Large Musical Icon Overlay (Watermark) */}
        <div className="absolute top-20 right-[-100px] md:right-[-50px] opacity-[0.05] pointer-events-none select-none">
          <svg width="600" height="800" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M100 250C120 250 140 230 140 200C140 160 100 140 80 120C60 100 50 80 50 60C50 30 70 10 100 10C130 10 150 30 150 60C150 70 145 80 140 85L140 250C140 270 120 290 100 290C80 290 60 270 60 240C60 210 80 190 100 190" stroke="currentColor" strokeWidth="2" />
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
                    src="/assets/Img/KAV04223.webp"
                    alt="Vidushi Vasudha Ravi"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform"
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
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left animate-on-scroll">
              <div className="mb-6 flex items-center gap-3" style={{ transitionDelay: '200ms' }}>
                <div className="w-8 h-[1px] bg-burgundy" />
                <span className="font-body text-burgundy uppercase tracking-[0.25em] text-xs font-semibold">The Artist</span>
              </div>
              
              <h2 className="font-display text-5xl lg:text-6xl text-charcoal mb-8 leading-[1.1]" style={{ transitionDelay: '400ms' }}>
                A Luminous Voice in <br />
                <span className="italic text-burgundy">Carnatic Tradition</span>
              </h2>

              <div className="relative max-w-2xl mb-12">
                <span className="absolute -top-10 -left-6 font-display text-[120px] text-gold/10 leading-none select-none">"</span>
                <p className="font-body text-xl text-charcoal/80 leading-relaxed italic mb-8 relative z-10" style={{ transitionDelay: '600ms' }}>
                  Her performances are described as chaste, unhurried, and deeply melodic—renowned for raga alapanas that resonate with spiritual depth.
                </p>
                <div className="h-[1px] w-full bg-gradient-to-r from-gold/40 to-transparent mb-8" style={{ transitionDelay: '700ms' }} />
                <p className="font-body text-lg text-charcoal/70 leading-relaxed" style={{ transitionDelay: '800ms' }}>
                  In a tradition where lineage and purity are vital, Vidushi Smt. Vasudha Ravi stands as an exemplar of technical finesse and heartfelt devotion. For over 25 years, her music has carried the legacy of her gurus to audiences worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 items-center" style={{ transitionDelay: '1000ms' }}>
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
      <section className="py-20 bg-parchment relative overflow-hidden">
        {/* Background Musical Icons Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Music className="absolute top-10 left-[10%] w-16 h-16 text-gold/10 animate-float" />
          <Music2 className="absolute top-[20%] right-[15%] w-24 h-24 text-gold/10 animate-float-delayed" />
          <Music3 className="absolute bottom-[15%] left-[5%] w-20 h-20 text-gold/5 animate-float-slow" />
          <Music4 className="absolute bottom-[20%] right-[10%] w-32 h-32 text-gold/10 animate-float" />
          <Music className="absolute top-[40%] left-[20%] w-12 h-12 text-gold/5 animate-float-delayed opacity-50" />
          <Music3 className="absolute top-[60%] right-[25%] w-14 h-14 text-gold/5 animate-float-slow opacity-40" />
          <Music4 className="absolute top-[10%] left-1/2 -translate-x-1/2 w-10 h-10 text-gold/10 animate-float opacity-30" />
          <Music2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] text-gold/[0.03] rotate-12" />
        </div>

        {/* Decorative Staff Lines */}
        <div className="absolute top-[60%] left-0 w-full h-[100px] flex flex-col justify-between opacity-10 pointer-events-none">
          <div className="h-[1px] w-full bg-gold" />
          <div className="h-[1px] w-full bg-gold translate-x-10" />
          <div className="h-[1px] w-full bg-gold" />
          <div className="h-[1px] w-full bg-gold -translate-x-10" />
          <div className="h-[1px] w-full bg-gold" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-burgundy/30" />
              <span className="font-body text-burgundy uppercase tracking-[0.3em] text-xs font-bold">Milestones</span>
              <span className="w-12 h-[1px] bg-burgundy/30" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal">Musical Milestones</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gold/20 bg-cream shadow-xl rounded-sm">
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
                className={`p-8 lg:p-12 relative group border-gold/10 overflow-hidden transition-all duration-500 hover:bg-parchment/20 animate-on-scroll
                  ${i < 2 ? 'md:border-r' : ''} 
                  ${i !== 0 ? 'border-t md:border-t-0' : ''}
                `}
                style={{ transitionDelay: `${(i + 1) * 200}ms` }}
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

      {/* Musical Discography - Minimalist Split-Canvas Showcase */}
      <section id="music" className="py-24 bg-cream relative overflow-hidden border-y border-gold/10 min-h-[700px] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Visual Canvas (Left) */}
            <div className="w-full lg:w-[50%] animate-on-scroll">
              <div className="relative aspect-[4/5] max-w-[500px] mx-auto lg:ml-0 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] bg-parchment">
                {[
                  { image: '/assets/Img/KAV03998.webp', videoId: 'fms-uNfI3Z8' },
                  { image: '/assets/Img/KAV04127.webp', videoId: 'dQw4w9WgXcQ' },
                  { image: '/assets/Img/KAV03953.webp', videoId: 'X7-vV96L_X4' },
                  { image: '/assets/Img/KAV04156.webp', videoId: 'h7P9_W7W8-k' },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveVideoId(item.videoId)}
                    className={`absolute inset-0 w-full h-full cursor-pointer group/vid transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1)
                      ${idx === activeDiscography ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}
                    `}
                  >
                    <img 
                      src={item.image} 
                      alt="" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/vid:bg-black/20 transition-all duration-500 flex items-center justify-center">
                       <Play size={40} className="text-white opacity-0 group-hover/vid:opacity-100 transition-all duration-500 scale-50 group-hover/vid:scale-100" fill="currentColor" />
                    </div>
                  </div>
                ))}
                
                {/* Gold Arch Overlay (Decorative) */}
                <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
                <div className="absolute top-0 right-0 p-8">
                  <span className="font-display italic text-6xl text-white/40 select-none">0{activeDiscography + 1}</span>
                </div>
              </div>
            </div>

            {/* Narrative Canvas (Right) */}
            <div className="w-full lg:w-[50%] flex flex-col justify-center animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="mb-12 flex items-center gap-4">
                <Music size={16} className="text-burgundy" />
                <div className="h-px w-16 bg-burgundy/30" />
                <span className="font-body text-burgundy uppercase tracking-[0.6em] text-[10px] font-black underline underline-offset-8">Official Collection</span>
              </div>

              {[
                { title: 'Ramana Heritage', cat: 'SACRED CLASSICS', year: '2023', quote: 'A profound exploration of Ramana Maharshi\'s immortal verses through the soul of classical melody.', videoId: 'fms-uNfI3Z8' },
                { title: 'Cinematic Voice', cat: 'FILM & CROSSOVER', year: '2022', quote: 'Bringing technical perfection and classical emotive depth to the modern big-screen canvas.', videoId: 'dQw4w9WgXcQ' },
                { title: 'MLV Heritage', cat: 'BANI LEGACY', year: '2024', quote: 'A dedicated archival tribute to the technical rigor and spiritual purity of the Vasanthakumari lineage.', videoId: 'X7-vV96L_X4' },
                { title: 'Global Fusion', cat: 'WORLD STAGE', year: '2021', quote: 'Where tradition finds a new language—acclaimed international collaborations across jazz and folk.', videoId: 'h7P9_W7W8-k' },
              ].map((album, idx) => (
                <div 
                  key={idx}
                  className={`transition-all duration-700 
                    ${idx === activeDiscography ? 'opacity-100 translate-x-0' : 'fixed opacity-0 -translate-x-10 pointer-events-none'}
                  `}
                >
                  <span className="font-body text-burgundy/40 text-[11px] uppercase tracking-[0.4em] mb-4 block font-black">{album.cat}</span>
                  <h3 className="font-display text-5xl lg:text-7xl text-charcoal mb-10 leading-tight tracking-tighter">
                    {album.title}
                  </h3>
                  <div className="flex gap-4 mb-12">
                    <div className="w-12 h-[2px] bg-gold" />
                    <p className="font-body text-charcoal/60 text-xl lg:text-2xl leading-relaxed italic max-w-lg">
                      "{album.quote}"
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row items-center gap-10 mt-6">
                <div className="flex gap-4">
                   {[0, 1, 2, 3].map((num) => (
                    <button 
                      key={num}
                      onClick={() => setActiveDiscography(num)}
                      className={`relative overflow-hidden group w-14 h-2 bg-charcoal/5 transition-all duration-500
                        ${activeDiscography === num ? 'bg-burgundy w-20' : 'hover:bg-gold/20'}
                      `}
                    >
                      <div className={`absolute inset-0 bg-gold origin-left transition-transform duration-1000 ${activeDiscography === num ? 'scale-x-100' : 'scale-x-0'}`} />
                    </button>
                   ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="py-32 bg-charcoal relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Heading & Context */}
            <div className="w-full lg:w-1/3 animate-on-scroll">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="font-body text-gold uppercase tracking-[0.4em] text-[10px] font-black">Crossroads</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-cream leading-none mb-8">
                Artistry <br />
                <span className="italic text-gold font-light">Beyond</span> <br />
                Boundaries
              </h2>
              <p className="font-body text-cream/50 text-lg leading-relaxed mb-12">
                While deeply rooted in Carnatic purity, her voice has often traveled to unexpected shores—collaborating with maestros of film and global jazz.
              </p>
              
              <div className="space-y-8">
                {[
                  { label: 'Film Music', val: 'Featured in AR Rahman\'s Ponniyin Selvan' },
                  { label: 'Global Stage', val: 'Collaborations with Bavarian Youth Jazz Band' },
                  { label: 'Maestro Series', val: 'Vocal productions with Ilayaraja & Rajkumar Bharathi' }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-default border-l border-gold/20 pl-6 py-1 hover:border-gold transition-colors duration-500">
                    <p className="font-body text-[10px] text-gold uppercase tracking-widest font-black mb-1 opacity-60 group-hover:opacity-100">{stat.label}</p>
                    <p className="font-display text-xl text-cream/90 group-hover:text-cream transition-colors">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Showcase Grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
              
              {/* Card 1: Cinema Highlight (Color) */}
              <div className="relative group overflow-hidden bg-black/20 aspect-[4/5] md:translate-y-20 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/10 transform-gpu">
                <img 
                  src="/assets/Img/KAV04165.webp" 
                  alt="Ponniyin Selvan Collaboration" 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 will-change-transform transform-gpu"
                />
                {/* Full-image overlay for legibility (lighter on hover) */}
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/10 transition-colors duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent">
                  <span className="font-body text-[10px] text-gold uppercase tracking-[0.3em] font-black mb-3 block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">Film Legacy</span>
                  <h3 className="font-display text-3xl text-cream mb-4">The AR Rahman <br /><span className="italic text-gold">Production</span></h3>
                  <div className="w-12 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </div>
              </div>

              {/* Card 2: International Highlight (Black & White) */}
              <div className="relative group overflow-hidden bg-black/20 aspect-[4/5] transition-all duration-700 hover:shadow-2xl hover:shadow-gold/10 transform-gpu">
                <img 
                  src="/assets/Img/KAV04181.webp" 
                  alt="International Jazz Collaboration" 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 will-change-transform transform-gpu"
                />
                {/* Full-image overlay for legibility (lighter on hover) */}
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/10 transition-colors duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent">
                  <span className="font-body text-[10px] text-gold uppercase tracking-[0.3em] font-black mb-3 block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">World Stage</span>
                  <h3 className="font-display text-3xl text-cream mb-4">Symphonic <br /><span className="italic text-gold">Crossovers</span></h3>
                  <div className="w-12 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Awards Marquee - Heritage Ribbon Design */}
      <section className="py-8 bg-parchment border-y-[1px] border-gold/30 shadow-[inset_0_0_50px_rgba(201,168,76,0.05)] relative overflow-hidden">
        {/* Double Border Accent */}
        <div className="absolute top-1 left-0 w-full h-px bg-gold/10" />
        <div className="absolute bottom-1 left-0 w-full h-px bg-gold/10" />
        
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-[marquee_40s_linear_infinite] inline-flex items-center gap-6 font-body text-[11px] text-charcoal/80 uppercase tracking-[0.4em] font-black will-change-transform">
            {[
              "Sangeetha Kala Ratnam 2024",
              "Best Vocalist The Music Academy 2024",
              "Bharat Ratna M.S.Subbulakshmi Endowment Award 2023",
              "Shanmukha Sangeetha Shironmani 2019",
              "D.K.Pattammal Award of Excellence 2013",
              "Yuva Kala Bharathi 2008",
              "Child Prodigy – Lions Club 1997"
            ].map((award, i) => (
              <div key={i} className="flex items-center gap-6">
                <span>{award}</span>
                <Award className="w-3 h-3 text-gold" />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="animate-[marquee_40s_linear_infinite] inline-flex items-center gap-6 font-body text-[11px] text-charcoal/80 uppercase tracking-[0.4em] font-black ml-6 will-change-transform">
            {[
              "Sangeetha Kala Ratnam 2024",
              "Best Vocalist The Music Academy 2024",
              "Bharat Ratna M.S.Subbulakshmi Endowment Award 2023",
              "Shanmukha Sangeetha Shironmani 2019",
              "D.K.Pattammal Award of Excellence 2013",
              "Yuva Kala Bharathi 2008",
              "Child Prodigy – Lions Club 1997"
            ].map((award, i) => (
              <div key={i} className="flex items-center gap-6">
                <span>{award}</span>
                <Award className="w-3 h-3 text-gold" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Performance — Director's Monitor */}
      <section id="concerts" className="py-24 bg-[#FAF9F6] border-t border-gold/10 relative overflow-hidden">

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* The Viewfinder (Video) */}
            <div className="w-full lg:w-2/3 relative group animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {/* Camera Interface Overlay */}
              <div className="absolute -inset-4 md:-inset-8 border border-gold/30 rounded-lg pointer-events-none flex flex-col justify-between p-4 z-20">
                {/* Top Info Bar */}
                <div className="flex justify-between items-center text-[10px] font-body text-charcoal/40 uppercase tracking-widest">
                  <div className="flex items-center gap-2 text-red-500 font-bold">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> REC
                  </div>
                  <div className="hidden md:flex gap-6">
                    <span>ISO 800</span>
                    <span>WB 5600K</span>
                    <span>Shutter 180</span>
                  </div>
                  <div className="text-charcoal/60">BAT 84%</div>
                </div>

                {/* Center Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-charcoal" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-charcoal" />
                </div>

                {/* Bottom Info Bar */}
                <div className="flex justify-between items-center text-[10px] font-body text-charcoal/40 uppercase tracking-widest">
                  <span>A001_C024_RAW</span>
                  <span>24 FPS</span>
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/60" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/60" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/60" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/60" />
              </div>

              {/* The Video Itself */}
              <div className="aspect-video bg-charcoal overflow-hidden relative shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tDha3XQYczc?autoplay=1&mute=1&loop=1&playlist=tDha3XQYczc&rel=0&modestbranding=1&controls=1"
                  title="Vasudha Ravi - Rama Nidu Paada"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Ambient Lens Flare */}
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
            </div>

            {/* The Script (Content) */}
            <div className="w-full lg:w-1/3 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="border-l-2 border-burgundy pl-6 lg:pl-8 py-2">
                <span className="font-body text-burgundy uppercase tracking-[0.3em] text-[10px] font-black mb-3 block">From the Artist's Stage</span>
                <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-2 font-black tracking-tighter">
                  RAMA NIDU PAADA
                </h2>
                <span className="inline-block px-3 py-1 bg-burgundy/10 text-burgundy text-[10px] font-body uppercase mb-6 border border-burgundy/20">
                  Ragam • Shanmukhapriya
                </span>

                <p className="text-charcoal/80 text-lg leading-relaxed mb-10 font-body italic">
                  "Between devotion and mastery, a voice finds its truth." <br /><br />
                  A soulful kriti of Thyagaraja rendered with the full weight of Shanmukhapriya raga — captured live at a signature Carnatic concert.
                </p>

                <div className="space-y-4 font-body text-xs">
                  <div className="flex justify-between border-b border-gold/10 pb-2">
                    <span className="text-charcoal/80 uppercase tracking-widest">VOCALIST</span>
                    <span className="text-charcoal font-black">Vidushi Vasudha Ravi</span>
                  </div>
                  <div className="flex justify-between border-b border-gold/10 pb-2">
                    <span className="text-charcoal/80 uppercase tracking-widest">COMPOSER</span>
                    <span className="text-charcoal font-black">Saint Thyagaraja</span>
                  </div>
                  <div className="flex justify-between border-b border-gold/10 pb-2">
                    <span className="text-charcoal/80 uppercase tracking-widest">STATUS</span>
                    <span className="text-gold font-black">Live Performance</span>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=tDha3XQYczc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full py-4 bg-charcoal border border-charcoal hover:bg-burgundy hover:border-burgundy text-cream font-body font-black uppercase tracking-widest text-xs transition-all duration-500 flex justify-center items-center gap-3 group"
                >
                  <Play size={13} className="fill-current text-gold group-hover:text-cream transition-colors" /> Watch Full Performance
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Press Quotes - Header */}
      <section className="py-24 bg-cream text-center relative overflow-hidden">
        {/* Subtle Background Ornament */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-burgundy/30" />
            <span className="font-body text-burgundy uppercase tracking-[0.5em] text-xs font-black">In The Media</span>
            <div className="w-12 h-px bg-burgundy/30" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-charcoal leading-tight">
            Critical <span className="italic text-burgundy font-light">Appreciation</span>
          </h2>
          <p className="font-body text-charcoal/60 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Resonating voices from the world's leading publications, reflecting a lifelong devotion to the classical Carnatic tradition.
          </p>
        </div>
      </section>

      {/* Press Quotes - Expandable Horizontal Gallery */}
      <section id="media" className="h-[850px] md:h-[600px] w-full bg-charcoal overflow-hidden flex flex-col md:flex-row border-y border-gold/10 shadow-2xl">
        {reviews.map((review) => (
          <div
            key={review.id}
            onMouseEnter={() => setActiveReview(review.id)}
            className={`relative h-full transition-[flex] duration-500 ease-in-out cursor-pointer overflow-hidden transform-gpu will-change-[flex]
              ${activeReview === review.id ? 'flex-[2.5] active' : 'flex-1'}
              border-r border-cream/10 last:border-0
            `}
          >
            {/* Background Image */}
            <img 
              src={review.image} 
              alt={review.title}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 transform-gpu
                ${activeReview === review.id ? 'opacity-100' : 'opacity-40'}
              `}
            />
            
            {/* Dark Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20 transition-opacity duration-700
              ${activeReview === review.id ? 'opacity-40' : 'opacity-80'}
            `} />

            {/* Column Label (Vertical on Desktop, Horizontal on Mobile) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
              ${activeReview === review.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}>
              <h3 className="font-display text-lg md:text-2xl text-cream uppercase tracking-[0.4em] md:[writing-mode:vertical-lr] md:rotate-180 opacity-30 md:opacity-50">
                {review.pub} · {review.year}
              </h3>
            </div>

            {/* Content for Expanded State */}
            <div className={`relative h-full flex flex-col justify-end p-6 md:p-12 transition-[opacity,transform] duration-500 delay-100
              ${activeReview === review.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}>
              <div className="mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream/90 rounded-full mb-3 shadow-sm border border-gold/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy animate-pulse" />
                  <span className="font-body text-[10px] text-burgundy uppercase tracking-[0.3em] font-black">{review.category}</span>
                </div>
                <h3 className="font-display text-4xl md:text-6xl text-cream mb-1 leading-tight">{review.title}</h3>
                <div className="w-16 h-1 bg-gold mb-4" />
              </div>
              
              <p className="font-body text-xl md:text-2xl text-cream/80 max-w-2xl mb-6 leading-relaxed italic">
                "{review.quote}"
              </p>
              
              <div className="flex items-center gap-6">
                <Link 
                  to="/media" 
                  className="font-body text-xs text-cream uppercase tracking-[0.3em] font-black group flex items-center gap-4"
                >
                   <span className="pb-1 border-b-2 border-gold group-hover:border-cream transition-colors">Learn More</span>
                   <span className="text-xl transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
                <div className="flex-grow h-px bg-cream/10" />
                <span className="font-display text-2xl text-gold/40 italic">{review.year}</span>
              </div>
            </div>

            {/* Expansion Indicator (Small Plus/Icon) */}
            {activeReview !== review.id && (
              <div className="absolute top-10 right-1/2 translate-x-1/2 text-gold/30">
                <Plus className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Teaching & Legacy - The "Guru" Visionary Design (Exact Visual Match) */}
      <section id="teaching" className="py-16 bg-[#F5F5F5] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative flex flex-col lg:flex-row items-stretch min-h-[650px]">
            
            {/* Left: Overlapping White Card */}
            <div className="w-full lg:w-[50%] bg-white p-10 lg:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.1)] relative z-20 self-center border-l-[4px] border-burgundy animate-on-scroll">
              <div className="inline-block bg-burgundy text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-10">
                The Guru
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-12">
                Passing the Torch, <br />
                <span className="text-burgundy">Nurturing the Future.</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="font-body text-charcoal/70 leading-relaxed max-w-xl">
                  Vidushi Smt. Vasudha Ravi's pedagogical journey serves as a powerful testament to the impact of dedicated <strong>Shishya Parampara</strong>. Born into a lineage of tradition, she has grown to become a pillar of support for the next generation.
                </p>
                
                <p className="font-body text-[13px] text-charcoal/50 leading-relaxed max-w-xl">
                  Through a synergy of <strong>Technical Rigor</strong>, <strong>Voice Culture</strong>, and <strong>Bhava</strong>, she is crafting a legacy that bridges the gap between tradition and modern progress.
                </p>
              </div>
              
              <div className="pt-10 border-t border-gold/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/5 flex items-center justify-center">
                    <Music className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-body font-black text-sm text-charcoal uppercase tracking-widest">Heritage</h4>
                    <p className="font-body text-[10px] text-charcoal/40 uppercase tracking-widest">Technique & Rigor</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/5 flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-body font-black text-sm text-charcoal uppercase tracking-widest">Academy</h4>
                    <p className="font-body text-[10px] text-charcoal/40 uppercase tracking-widest">Global Legacy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Background Image with Fade */}
            <div className="w-full lg:w-[65%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 z-10 animate-on-scroll">
              <div className="relative h-full w-full bg-charcoal overflow-hidden">
                {guruImages.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`Guru Vasudha Ravi ${idx + 1}`} 
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out will-change-opacity
                      ${activeGuruImage === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-100'}
                    `}
                  />
                ))}
                
                {/* Subtle dark overlay for depth */}
                <div className="absolute inset-0 bg-charcoal/20 z-10" />
                
                {/* Reference Fade Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] via-transparent to-transparent opacity-100 lg:block hidden z-20" />
                
                {/* Slider Indicators (Clickable dots) */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                   {guruImages.map((_, idx) => (
                     <button
                       key={idx}
                       onClick={() => setActiveGuruImage(idx)}
                       className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border border-gold/40
                         ${activeGuruImage === idx ? 'bg-gold scale-125' : 'bg-gold/20 hover:bg-gold/40'}
                       `}
                       title={`View Image ${idx + 1}`}
                     />
                   ))}
                </div>
              </div>
            </div>

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

      {/* Video Modal Implementation */}
      {activeVideoId && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-500">
          <button 
            onClick={() => setActiveVideoId(null)}
            className="absolute top-10 right-10 text-white hover:text-gold transition-colors p-4 group"
          >
            <span className="font-body tracking-[0.4em] text-xs font-black group-hover:scale-110 block">CLOSE [X]</span>
          </button>
          
          <div className="w-full max-w-5xl aspect-video px-6 relative animate-in fade-in zoom-in duration-500">
             <iframe 
               className="w-full h-full rounded-lg shadow-2xl border border-gold/20"
               src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
               title="YouTube Video Player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
