import { useState } from 'react';
import PageHero from '../components/PageHero';
import GoldDivider from '../components/GoldDivider';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const pressLinks = [
  { pub: 'The Hindu', title: 'A mix of training and talent', link: 'https://www.thehindu.com/entertainment/music/a-mix-of-training-and-talent-came-through-in-vasudha-ravis-renditions/article66267028.ece', isHindu: true },
  { pub: 'The Hindu', title: 'Concert was an Ode to the MLV Bani', link: 'https://www.thehindu.com/entertainment/music/vasudha-ravis-concert-was-an-ode-to-the-mlv-bani/article69179153.ece', isHindu: true },
  { pub: 'The Hindu', title: 'Graceful and Melodious', link: 'https://www.thehindu.com/news/cities/Madurai/graceful-and-melodious-concert-by-vasudha-ravi/article69925304.ece', isHindu: true },
  { pub: 'The Hindu', title: 'Bonding with the Audience', link: 'https://www.thehindu.com/entertainment/music/bonding-with-the-audience/article19969214.ece', isHindu: true },
  { pub: 'The Hindu', title: 'Impressive Essay of Ragas', link: 'https://www.thehindu.com/features/friday-review/music/Impressive-essay-of-ragas/article11604917.ece', isHindu: true },
  { pub: 'The Hindu', title: 'Vasudha Ravi Enlivened the Audience', link: 'https://www.thehindu.com/entertainment/music/vasudha-ravi-enlivened-the-audience-with-her-rendition-at-a-recital-in-kerala/article30742459.ece', isHindu: true },
  { pub: 'The Hindu', title: 'Unusual Choices', link: 'https://www.thehindu.com/entertainment/music/unusual-choices/article37912567.ece', isHindu: true },
  { pub: 'Times of India', title: 'Next-gen Rasikas', link: 'https://timesofindia.indiatimes.com/city/chennai/time-to-create-next-gen-rasikas/articleshow/116609347.cms' },
  { pub: 'New Indian Express', title: 'JVALA 2025', link: 'https://www.newindianexpress.com/cities/chennai/2025/Sep/03/jvala-into-a-space-of-discovery-in-chennai' },
  { pub: 'Asian Lite', title: 'Carnatic-Hindustani Muscat', link: 'https://asianlite.com/2024/events/a-fusion-of-carnatic-hindustani-sangeet-is-all-set-to-mesmerize-music-lovers-of-muscat' },
  { pub: 'Carnatic Times', title: 'Silken Voice', link: 'https://carnatictimes.wordpress.com/portfolio/silken-voice-soulful-music-vasudha-ravi-2/#more-528' },
  { pub: 'The S Studio', title: 'Woman of Substance', link: 'https://thesstudioonline.com/blogs/news/the-s-studio-s-woman-of-substance-vasudha-ravi' },
];

// All 55 real images categorized
const allImages = [
  // Performances — action/stage shots (close-up singing, micro gestures)
  { src: '/assets/Img/KAV03916.webp', category: 'Performances', caption: 'On Stage' },
  { src: '/assets/Img/KAV03931.webp', category: 'Performances', caption: 'Performance Highlight' },
  { src: '/assets/Img/KAV03953.webp', category: 'Performances', caption: 'In Full Rendition' },
  { src: '/assets/Img/KAV03957.webp', category: 'Performances', caption: 'Concert Moment' },
  { src: '/assets/Img/KAV03964.webp', category: 'Performances', caption: 'Stage Presence' },
  { src: '/assets/Img/KAV03966.webp', category: 'Performances', caption: 'Vocal Artistry' },
  { src: '/assets/Img/KAV03983.webp', category: 'Performances', caption: 'Deep in Melody' },
  { src: '/assets/Img/KAV03992.webp', category: 'Performances', caption: 'Raga Exploration' },
  { src: '/assets/Img/KAV03998.webp', category: 'Performances', caption: 'Musical Moment' },
  { src: '/assets/Img/KAV04002.webp', category: 'Performances', caption: 'On the Concert Stage' },
  { src: '/assets/Img/KAV04009.webp', category: 'Performances', caption: 'Performance' },
  // Awards — celebration, felicitation moments
  { src: '/assets/Img/KAV04020.webp', category: 'Awards', caption: 'Felicitation Ceremony' },
  { src: '/assets/Img/KAV04031.webp', category: 'Awards', caption: 'Award Recognition' },
  { src: '/assets/Img/KAV04034.webp', category: 'Awards', caption: 'Honoured at Ceremony' },
  { src: '/assets/Img/KAV04037.webp', category: 'Awards', caption: 'Award Moment' },
  { src: '/assets/Img/KAV04039.webp', category: 'Awards', caption: 'Recognition' },
  { src: '/assets/Img/KAV04045.webp', category: 'Awards', caption: 'Felicitation' },
  { src: '/assets/Img/KAV04066.webp', category: 'Awards', caption: 'Award Ceremony' },
  { src: '/assets/Img/KAV04073.webp', category: 'Awards', caption: 'Honoured' },
  { src: '/assets/Img/KAV04076.webp', category: 'Awards', caption: 'Celebration' },
  // International — international concerts and collaborations
  { src: '/assets/Img/KAV04096.webp', category: 'International', caption: 'International Stage' },
  { src: '/assets/Img/KAV04101.webp', category: 'International', caption: 'Global Performance' },
  { src: '/assets/Img/KAV04107.webp', category: 'International', caption: 'Overseas Concert' },
  { src: '/assets/Img/KAV04114.webp', category: 'International', caption: 'International Collaboration' },
  { src: '/assets/Img/KAV04118.webp', category: 'International', caption: 'World Stage' },
  { src: '/assets/Img/KAV04122.webp', category: 'International', caption: 'Cross-Cultural Music' },
  { src: '/assets/Img/KAV04127.webp', category: 'International', caption: 'International Music Festival' },
  { src: '/assets/Img/KAV04139.webp', category: 'International', caption: 'Global Footprint' },
  // Behind the Scenes — candid, rehearsal, backstage
  { src: '/assets/Img/KAV04146.webp', category: 'Behind the Scenes', caption: 'Backstage Moment' },
  { src: '/assets/Img/KAV04151.webp', category: 'Behind the Scenes', caption: 'Pre-Concert Preparation' },
  { src: '/assets/Img/KAV04153.webp', category: 'Behind the Scenes', caption: 'Candid Rehearsal' },
  { src: '/assets/Img/KAV04156.webp', category: 'Behind the Scenes', caption: 'Behind the Curtain' },
  { src: '/assets/Img/KAV04157.webp', category: 'Behind the Scenes', caption: 'Candid' },
  { src: '/assets/Img/KAV04161.webp', category: 'Behind the Scenes', caption: 'Rehearsal' },
  { src: '/assets/Img/KAV04165.webp', category: 'Behind the Scenes', caption: 'With Co-Artists' },
  // More Performances
  { src: '/assets/Img/KAV04181.webp', category: 'Performances', caption: 'Concert Performance' },
  { src: '/assets/Img/KAV04188.webp', category: 'Performances', caption: 'Live on Stage' },
  { src: '/assets/Img/KAV04195.webp', category: 'Performances', caption: 'In Concert' },
  { src: '/assets/Img/KAV04201.webp', category: 'Performances', caption: 'Stage Moment' },
  { src: '/assets/Img/KAV04204.webp', category: 'Performances', caption: 'Musical Rendition' },
  { src: '/assets/Img/KAV04208.webp', category: 'Performances', caption: 'Vocal Excellence' },
  { src: '/assets/Img/KAV04223.webp', category: 'Performances', caption: 'Melodic Evening' },
  // More Behind the Scenes
  { src: '/assets/Img/KAV04236.webp', category: 'Behind the Scenes', caption: 'Candid Smile' },
  { src: '/assets/Img/KAV04238.webp', category: 'Behind the Scenes', caption: 'Off Stage' },
  { src: '/assets/Img/KAV04241.webp', category: 'Behind the Scenes', caption: 'Warmth Backstage' },
  { src: '/assets/Img/KAV04249.webp', category: 'Behind the Scenes', caption: 'Artist\'s World' },
  // More International
  { src: '/assets/Img/KAV04267.webp', category: 'International', caption: 'International Concert' },
  { src: '/assets/Img/KAV04285.webp', category: 'International', caption: 'World Music Platforms' },
  { src: '/assets/Img/KAV04287.webp', category: 'International', caption: 'Global Performer' },
  // More Awards
  { src: '/assets/Img/KAV04304.webp', category: 'Awards', caption: 'Award Season' },
  { src: '/assets/Img/KAV04313.webp', category: 'Awards', caption: 'Felicitated' },
  { src: '/assets/Img/KAV04315.webp', category: 'Awards', caption: 'Recognition Ceremony' },
  { src: '/assets/Img/KAV04318.webp', category: 'Awards', caption: 'Musical Honours' },
  { src: '/assets/Img/KAV04341.webp', category: 'Awards', caption: 'Celebrated Artiste' },
  { src: '/assets/Img/KAV04352.webp', category: 'Awards', caption: 'Achievement' },
  { src: '/assets/Img/1.jpg',         category: 'Performances', caption: 'Recital' },
];

const tabs = ['All', 'Performances', 'Awards', 'International', 'Behind the Scenes'];

export default function Media() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered list

  const filtered = activeTab === 'All' ? allImages : allImages.filter(img => img.category === activeTab);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightbox(i => (i + 1) % filtered.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="bg-cream animate-fade-in relative pb-24">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
      
      <PageHero 
        title="Media & Gallery" 
        subtitle="Moments in Music" 
        bgImage="/assets/Img/KAV03916.webp"
      />

      {/* Gallery Filter */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gold/20 pb-4">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-body text-sm uppercase tracking-widest px-4 py-2 transition-colors duration-300 ${
                  activeTab === tab ? 'text-burgundy border-b border-burgundy' : 'text-charcoal/60 hover:text-gold'
                }`}
              >
                {tab}
                <span className="ml-2 text-xs text-gold/60">
                  ({tab === 'All' ? allImages.length : allImages.filter(img => img.category === tab).length})
                </span>
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <div 
                key={img.src} 
                className="group relative overflow-hidden bg-parchment aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                  <p className="font-body text-gold text-[10px] uppercase tracking-widest border-b border-gold/40 pb-1 mb-1 inline-block">
                    {img.category}
                  </p>
                  <p className="font-display italic text-cream text-base">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button 
            className="absolute top-6 right-6 text-cream/70 hover:text-gold transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button 
            className="absolute left-4 text-cream/70 hover:text-gold transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] px-20" onClick={e => e.stopPropagation()}>
            <img 
              src={filtered[lightbox].src} 
              alt={filtered[lightbox].caption}
              className="max-w-full max-h-[80vh] object-contain mx-auto shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="font-body text-gold text-xs tracking-widest uppercase">{filtered[lightbox].category}</p>
              <p className="font-display italic text-cream text-xl mt-1">{filtered[lightbox].caption}</p>
              <p className="font-body text-cream/40 text-xs mt-2">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Next */}
          <button 
            className="absolute right-4 text-cream/70 hover:text-gold transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}

      <GoldDivider />

      {/* Press Coverage */}
      <section className="py-24 relative z-10 bg-parchment">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Reviews & News</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal">Press Coverage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pressLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cream border border-gold/10 p-6 flex flex-col h-full hover:border-gold hover:-translate-y-1 transition-all duration-300 group shadow-[2px_2px_0_0_rgba(201,168,76,0.1)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`font-body text-xs tracking-widest uppercase px-2 py-1 rounded-sm border ${link.isHindu ? 'bg-burgundy/5 border-burgundy text-burgundy' : 'bg-charcoal/5 border-charcoal/20 text-charcoal'}`}>
                    {link.pub}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gold/60 group-hover:text-gold" />
                </div>
                <h3 className="font-display text-xl text-charcoal leading-snug mb-4 group-hover:text-burgundy transition-colors">
                  "{link.title}"
                </h3>
                <span className="mt-auto font-body text-sm text-gold uppercase tracking-wider group-hover:tracking-widest transition-all">
                  Read Article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
