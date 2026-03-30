import PageHero from '../components/PageHero';
import GoldDivider from '../components/GoldDivider';
import { Link } from 'react-router-dom';

const themathic = [
  { title: 'Ramana Geethams', desc: 'Devotional compositions of Bhagawan Ramana Maharshi' },
  { title: 'Tri-Shakthi', desc: 'A musical tribute to the divine feminine trinity' },
  { title: 'Sri Rama Vaibhavam', desc: 'Glories of Sri Rama through Carnatic compositions' },
  { title: 'Bhadrachala Ramadasu', desc: 'Compositions of saint-composer Bhadrachala Ramadasu' },
  { title: 'Krishna Leela Tharanga', desc: 'Compositions of Narayana Theerthar on Krishna\'s leelas' },
  { title: 'DASHA', desc: 'An insight into the Dasavatharam — ten avatars of Vishnu' },
  { title: 'Sadasiva Brahmendral', desc: 'Rare classical works of the saint' },
  { title: 'Shyama Shastri', desc: 'Compositions from the Trinity of Carnatic music' },
  { title: 'Papanasam Sivan', desc: 'Tamil Carnatic compositions' },
];

export default function Concerts() {
  return (
    <div className="bg-cream animate-fade-in relative pb-24">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
      
      <PageHero 
        title="Concerts" 
        subtitle="Performances Across Generations" 
        bgImage="/assets/Img/KAV03964.webp"
      />

      {/* Thematic Presentations */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Signature</span>
          <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-16">Thematic Presentations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themathic.map((program, i) => (
              <div key={i} className="bg-parchment/60 p-8 border border-gold/10 hover:border-gold/40 transition-all duration-300 text-left group">
                <div className="w-8 h-[1px] bg-gold mb-4 group-hover:w-full transition-all duration-700 ease-out" />
                <h3 className="font-display text-2xl text-burgundy mb-3">{program.title}</h3>
                <p className="font-body text-charcoal/70 leading-relaxed text-[15px]">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* International Performances */}
      <section className="py-24 relative z-10 bg-charcoal text-cream text-center overflow-hidden border-y-[3px] border-gold">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Global Footprint</span>
          <h2 className="font-display text-4xl lg:text-5xl mb-16 text-cream">International Stages</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {['🇮🇳 India', '🇫🇷 France', '🇩🇪 Germany', '🇱🇰 Sri Lanka', '🇺🇸 USA', '🇸🇬 Singapore'].map((country) => (
              <span key={country} className="px-6 py-3 border border-gold/40 rounded-full font-body tracking-wider bg-parchment/5 hover:bg-gold hover:text-charcoal transition-colors">
                {country}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
            <div className="p-8 border border-gold/20 bg-black/20">
              <h4 className="font-display text-2xl text-gold mb-4">Germany</h4>
              <p className="font-body text-cream/70 leading-relaxed mb-4">
                Notable performances at the prestigious <strong>Musica Sacra International Music Festival</strong> and impactful collaborations with the <strong>Bavarian Youth Jazz Orchestra</strong> (Landes Jugend Jazz Orchestra).
              </p>
            </div>
            <div className="p-8 border border-gold/20 bg-black/20">
              <h4 className="font-display text-2xl text-gold mb-4">Oman & Global Fusions</h4>
              <p className="font-body text-cream/70 leading-relaxed mb-4">
                Pioneering cross-cultural musical dialogs through Carnatic-Hindustani fusions in Muscat and electrifying <strong>Carnatic-Rock fusions</strong> alongside Jai Ho Sanjeev Thomas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming & Naadaneerajam */}
      <section className="py-24 relative z-10 bg-cream">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16">
          
          <div className="bg-parchment p-10 border border-gold/10 text-center flex flex-col items-center justify-center">
            <span className="font-display italic text-3xl text-burgundy mb-6">Upcoming Concerts</span>
            
            {/* Empty State / Placeholder */}
            <div className="w-full py-12 border-2 border-dashed border-gold/30 rounded-lg">
              <p className="font-body text-charcoal/60 mb-2">Schedule updating soon.</p>
              <p className="font-body text-sm text-charcoal/40">[ Date / Venue / City / Tickets ]</p>
            </div>
          </div>

          <div className="bg-burgundy text-cream p-10 flex flex-col justify-center text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <h3 className="font-display text-3xl text-gold mb-6">Tirupathi Tirumala Devasthanam</h3>
            <p className="font-body text-lg font-light leading-relaxed italic mb-8">
              "Smt. Vasudha Ravi is proud to be associated with Tirupathi Tirumala Devasthanam Naadaneerajam as Asthana Gayika since 2014."
            </p>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <div className="container mx-auto px-6">
          <div className="bg-charcoal text-cream py-16 px-8 rounded-sm max-w-4xl mx-auto border border-gold/30">
            <h3 className="font-display text-3xl md:text-4xl mb-6">Invite Her Voice to Your Stage</h3>
            <p className="font-body text-cream/70 mb-8 max-w-2xl mx-auto">
              Available for sabha performances, corporate events, and private concerts worldwide.
            </p>
            <Link 
              to="/contact" 
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-charcoal px-10 py-4 font-body uppercase tracking-wider text-sm transition-all duration-300"
            >
              Book for a Concert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
