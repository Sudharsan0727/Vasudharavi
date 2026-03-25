import PageHero from '../components/PageHero';
import { MapPin, Mail, PlayCircle } from 'lucide-react';
import { FaYoutube as Youtube, FaInstagram as Instagram, FaFacebookF as Facebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-cream animate-fade-in relative pb-24">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
      
      <PageHero 
        title="Contact & Bookings" 
        subtitle="Invite Her Voice to Your Stage" 
      />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          
          {/* Left: Info */}
          <div>
            <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8">Let's Connect</h2>
            
            <p className="font-body text-lg text-charcoal/80 mb-10 leading-relaxed border-l-2 border-gold pl-6 py-2 bg-parchment/30">
              "For concert bookings, collaborations, teaching enquiries, and media requests."
            </p>

            <ul className="space-y-6 font-body text-lg text-charcoal/90 mb-12">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <strong className="block font-medium uppercase text-sm tracking-wider text-charcoal mb-1">Location</strong>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <strong className="block font-medium uppercase text-sm tracking-wider text-charcoal mb-1">Email</strong>
                  <a href="mailto:contact@vasudharavi.com" className="hover:text-gold transition-colors block">
                    contact@vasudharavi.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="border-t border-gold/20 pt-8 mt-12">
              <span className="font-body text-charcoal/60 uppercase tracking-widest text-xs mb-4 block">Social Channels</span>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-16 bg-charcoal text-cream p-8 border border-gold/20 relative outline outline-1 outline-offset-4 outline-gold/20">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <PlayCircle className="w-16 h-16 text-gold" />
              </div>
              <h4 className="font-display text-2xl text-gold mb-3">Booking Information</h4>
              <p className="font-body text-sm leading-relaxed opacity-90">
                Smt. Vasudha Ravi performs at sabhas, cultural festivals, temple events, corporate events, and private concerts. 
                <br/><br/>
                <span className="text-gold">For international bookings and collaborations</span>, please mention your country, organization, and event details in the message.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-parchment p-8 lg:p-12 shadow-sm border border-gold/10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-burgundy" />
            <h3 className="font-display text-3xl text-charcoal mb-8">Send an Enquiry</h3>
            
            <form className="space-y-6 font-body">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-charcoal/60 ml-2">Full Name *</label>
                <input 
                  type="text" 
                  className="w-full bg-cream border border-gold/30 p-4 text-charcoal focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/20 transition-all" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-charcoal/60 ml-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full bg-cream border border-gold/30 p-4 text-charcoal focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/20 transition-all" 
                    required 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-charcoal/60 ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-cream border border-gold/30 p-4 text-charcoal focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/20 transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-charcoal/60 ml-2">Enquiry Type *</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-cream border border-gold/30 p-4 text-charcoal appearance-none focus:outline-none focus:border-burgundy cursor-pointer relative z-10 bg-transparent">
                    <option value="" disabled>Select an option</option>
                    <option>Concert Booking</option>
                    <option>Teaching / Lessons</option>
                    <option>Lec-Dem</option>
                    <option>Collaboration</option>
                    <option>Media / Press</option>
                    <option>General</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gold pointer-events-none">
                    ▼
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-charcoal/60 ml-2">Event Date (optional)</label>
                  <input 
                    type="date" 
                    className="w-full bg-cream border border-gold/30 p-4 text-charcoal/70 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/20 transition-all" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-charcoal/60 ml-2">Event Location</label>
                  <input 
                    type="text" 
                    placeholder="City, Country"
                    className="w-full bg-cream border border-gold/30 p-4 text-charcoal focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/20 transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-charcoal/60 ml-2">Message / Details *</label>
                <textarea 
                  rows="5"
                  className="w-full bg-cream border border-gold/30 p-4 text-charcoal focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy/20 transition-all resize-none" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold text-charcoal font-medium uppercase tracking-widest text-sm py-5 hover:bg-gold-light transition-colors duration-300 mt-4 shadow-md"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 bg-charcoal border-y border-gold/20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-cream/40 uppercase tracking-[0.3em] text-xs mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 font-display text-xl md:text-2xl text-gold/70 italic">
            <span className="hover:text-gold transition-colors px-4">The Hindu</span>
            <span className="hover:text-gold transition-colors px-4">Times of India</span>
            <span className="hover:text-gold transition-colors px-4">New Indian Express</span>
            <span className="hover:text-gold transition-colors px-4">Dinamalar</span>
          </div>
        </div>
      </section>

    </div>
  );
}
