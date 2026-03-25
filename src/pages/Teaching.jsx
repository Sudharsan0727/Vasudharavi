import PageHero from '../components/PageHero';
import GoldDivider from '../components/GoldDivider';

export default function Teaching() {
  return (
    <div className="bg-cream animate-fade-in relative pb-24">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
      
      <PageHero 
        title="Teaching & Lec-Dem" 
        subtitle="Passing the Torch of Tradition" 
        bgImage="/images/vasudha-teaching.jpg"
      />

      {/* Philosophy */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <blockquote className="font-display italic text-3xl md:text-5xl text-charcoal leading-tight border-y border-gold/30 py-12 px-8 relative">
            <span className="absolute -top-[1.2rem] left-1/2 -translate-x-1/2 text-8xl text-gold/20 font-serif leading-none">"</span>
            Focus not on who's in the audience, but that the divine listener is always there.
            <span className="absolute -bottom-[4.5rem] right-1/2 translate-x-[4rem] text-8xl text-gold/20 font-serif leading-none">"</span>
            <footer className="font-body text-sm font-medium tracking-widest text-gold uppercase mt-6 pt-6 border-t border-gold/10 w-48 mx-auto">
              A lesson from her Guru<br/><span className="lowercase text-xs opacity-60">Dr. Manjula Sriram</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 relative z-10 bg-parchment border-y border-gold/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Values</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal">Teaching Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎵', title: 'Holistic Development', desc: 'Technical mastery paired with ethical, aesthetic, and spiritual understanding.' },
              { icon: '🗣️', title: 'Individual Attention', desc: 'Pedagogy adapted to nurture each student\'s unique voice and capabilities.' },
              { icon: '🌱', title: 'No Shortcuts', desc: 'Prioritizing consistency, devotion, and foundational rigor over surface gimmickry.' },
              { icon: '🙏', title: 'Music as Offering', desc: 'Instilling the mindset that every rendition is a form of seva (service).' }
            ].map((pillar, i) => (
              <div key={i} className="bg-cream p-8 text-center border-t-2 border-gold shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="font-display text-2xl text-burgundy mb-3">{pillar.title}</h3>
                <p className="font-body text-charcoal/70 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lec-Dem */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Knowledge Sharing</span>
            <h2 className="font-display text-4xl text-charcoal mb-8">Lecture Demonstrations</h2>
            
            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
              Smt. Vasudha Ravi regularly conducts immersive lecture-demonstrations (Lec-Dems) aimed at demystifying complex Carnatic concepts—spanning raga delineation, tala structures, bhava (emotion), and the essence of the guru-shishya parampara.
            </p>
            <p className="font-body text-sm text-charcoal/60 uppercase tracking-widest border-b border-gold/20 pb-4 mb-4">
              Suitable for: Institutions · Sabhas · Cultural Orgs · Corporates
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body mt-8">
              {[
                'Raga — Identity and Evolution',
                'The Trinity and Their Contributions',
                'Sangeetha and Spirituality',
                'The Guru-Shishya Parampara'
              ].map((topic, i) => (
                <li key={i} className="flex items-start gap-3 bg-parchment/50 p-3 shadow-sm border border-gold/5">
                  <span className="text-gold">✦</span>
                  <span className="text-charcoal/90 leading-tight">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-charcoal text-cream p-10 border border-gold/30 rounded-sm">
            <h3 className="font-display text-3xl text-gold mb-6">Student Enquiry</h3>
            <p className="font-body text-sm mb-8 opacity-80">
              Inquire about regular lessons, masterclasses, or booking a Lec-Dem.
            </p>
            
            <form className="space-y-4 font-body">
              <div>
                <input type="text" placeholder="Full Name" className="w-full bg-cream/10 border border-gold/30 p-3 text-cream placeholder-cream/50 focus:outline-none focus:border-gold" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full bg-cream/10 border border-gold/30 p-3 text-cream placeholder-cream/50 focus:outline-none focus:border-gold" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-cream/10 border border-gold/30 p-3 text-cream placeholder-cream/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <select defaultValue="" className="w-full bg-cream/10 border border-gold/30 p-3 text-cream/70 focus:outline-none focus:border-gold appearance-none">
                  <option value="" disabled className="bg-charcoal text-cream">Select Interest</option>
                  <option className="bg-charcoal text-cream">Interest in Learning</option>
                  <option className="bg-charcoal text-cream">Lec-Dem Booking</option>
                  <option className="bg-charcoal text-cream">Masterclass</option>
                </select>
              </div>
              <div>
                <textarea rows="4" placeholder="Your Message / Background" className="w-full bg-cream/10 border border-gold/30 p-3 text-cream placeholder-cream/50 focus:outline-none focus:border-gold"></textarea>
              </div>
              <button className="w-full bg-gold text-charcoal font-medium uppercase tracking-widest text-sm py-4 hover:bg-gold-light transition-colors duration-300">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
