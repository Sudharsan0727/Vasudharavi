import PageHero from '../components/PageHero';
import GoldDivider from '../components/GoldDivider';
import { PlayCircle } from 'lucide-react';

export default function Music() {
  return (
    <div className="bg-cream animate-fade-in relative pb-24">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
      
      <PageHero 
        title="Music" 
        subtitle="Compositions, Collaborations & Recordings" 
      />

      {/* Musical Style */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">The Artistry</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {[
              "Chaste, unhurried, and deeply melodic",
              "Raga alapanas admired for purity and depth",
              "Clarity in both sahityam and pitch",
              "A balance of deep-rooted tradition and distinctive personal expression"
            ].map((quote, i) => (
              <div key={i} className="bg-parchment p-8 flex items-center justify-center border-l-4 border-gold group hover:bg-gold/10 transition-colors">
                <p className="font-display text-2xl text-charcoal italic group-hover:text-burgundy transition-colors delay-75">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>

          <p className="mt-16 font-body text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed border-t border-gold/20 pt-10">
            "Her raga alapanas are admired for their purity and depth; kritis rendered with clarity in both sahityam and pitch. Her capacity to modulate kalas (speed) for emotional impact is noteworthy."
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* Collaborations */}
      <section className="py-24 relative z-10 bg-parchment border-y border-gold/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Crossroads</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal">Notable Collaborations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Ponniyin Selvan', desc: 'Lent her voice for AR Rahman\'s magnum opus musical production' },
              { title: 'Maestro Ilayaraja', desc: 'Featured in elite musical productions' },
              { title: 'Shri. Rajkumar Bharathi', desc: 'Specialized musical productions' },
              { title: 'Musica Sacra Festival', desc: 'International classical music platform in Germany' },
              { title: 'Bavarian Youth Jazz Band', desc: 'Landes Jugend Jazz Orchestra crossover project in Germany' },
              { title: 'Jai Ho Sanjeev Thomas', desc: 'Carnatic in Rock fuse shows exploring modern soundscapes' }
            ].map((collab, i) => (
              <div key={i} className="bg-cream border border-gold/20 p-8 shadow-[4px_4px_0_0_rgba(201,168,76,0.3)] hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-display text-2xl text-burgundy mb-4">{collab.title}</h4>
                <p className="font-body text-charcoal/70 leading-relaxed">{collab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Player / Audio Placeholder */}
      <section className="py-24 relative z-10 bg-charcoal text-cream">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Listen</span>
          <h2 className="font-display text-4xl mb-12">Ragas & Compositions</h2>
          
          <div className="bg-black/40 border border-gold/30 aspect-video rounded-sm overflow-hidden flex flex-col items-center justify-center text-muted relative group cursor-pointer">
            <div className="absolute inset-0 group-hover:bg-gold/5 transition-colors" />
            <PlayCircle className="w-16 h-16 text-gold mb-4 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
            <span className="font-body text-sm tracking-widest">[ YouTube Embed Slot / Audio Player ]</span>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            {['Spotify', 'Apple Music', 'YouTube Music'].map((platform) => (
              <button key={platform} className="px-6 py-2 border border-gold/40 rounded-full font-body text-sm hover:bg-gold hover:text-charcoal transition-colors uppercase tracking-wider">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-24 relative z-10 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Archive</span>
          <h2 className="font-display text-4xl text-charcoal mb-16">Discography & Recordings</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 border border-gold/20 flex flex-col items-center justify-center p-4">
                <p className="font-body text-muted text-sm">[ Album Cover ]</p>
                <p className="font-display text-charcoal mt-2 italic shadow-sm">Album {i}</p>
              </div>
            ))}
          </div>
          
          <p className="font-body text-charcoal/60 italic text-lg border-t border-gold/20 pt-8 inline-block">
            Recordings and albums coming soon. For inquiries, contact us.
          </p>
        </div>
      </section>

    </div>
  );
}
