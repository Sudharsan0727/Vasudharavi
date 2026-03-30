import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '#about', label: 'About' },
  { path: '#concerts', label: 'Concerts' },
  { path: '#music', label: 'Music' },
];

const secondaryLinks = [
  { path: '#teaching', label: 'Teaching' },
  { path: '#media', label: 'Media' },
  { path: '#contact', label: 'Contact' },
  { path: '/privacy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-cream/90 pt-20 pb-10 border-t border-gold/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="font-display italic text-3xl text-gold">
              Vasudha Ravi
            </Link>
            <p className="font-body text-sm leading-relaxed opacity-70 max-w-xs">
              Vidushi Smt. Vasudha Ravi is a renowned Carnatic vocalist, recognized for her melodic excellence and dedication to the classical tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-white transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-gold hover:text-white transition-colors"><FaYoutube size={20} /></a>
              <a href="#" className="text-gold hover:text-white transition-colors"><FaFacebookF size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-lg uppercase tracking-widest text-gold/80">Navigation</h4>
            <ul className="flex flex-col gap-3 font-body text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secondary Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-lg uppercase tracking-widest text-gold/80">Explore</h4>
            <ul className="flex flex-col gap-3 font-body text-sm">
              {secondaryLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-lg uppercase tracking-widest text-gold/80">Contact</h4>
            <ul className="flex flex-col gap-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:contact@vasudharavi.com" className="hover:text-gold transition-colors">
                  contact@vasudharavi.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="opacity-80">Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-50">
          <p>© {new Date().getFullYear()} Vasudha Ravi. All rights reserved.</p>
          <p>Handcrafted with Tradition</p>
        </div>
      </div>
    </footer>
  );
}
