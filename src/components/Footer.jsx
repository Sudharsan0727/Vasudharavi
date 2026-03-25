import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import { FaYoutube as Youtube, FaInstagram as Instagram, FaFacebookF as Facebook } from 'react-icons/fa';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/concerts', label: 'Concerts' },
  { path: '/music', label: 'Music' },
  { path: '/teaching', label: 'Teaching' },
  { path: '/media', label: 'Media' },
  { path: '/contact', label: 'Contact & Bookings' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-16 pb-8 border-t-[3px] border-gold">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="font-display italic text-3xl text-gold">Vasudha Ravi</Link>
          <p className="font-body text-sm font-light leading-relaxed">
            A-Grade Artist, All India Radio, Chennai
          </p>
          <p className="font-body text-sm font-light leading-relaxed opacity-75 mt-2">
            "A voice that carries both technical finesse and heartfelt devotion"
          </p>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-lg text-cream tracking-wide uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-2 font-body text-sm">
            {links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold/50 inline-block" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-lg text-cream tracking-wide uppercase">Contact</h4>
          <ul className="flex flex-col gap-4 font-body text-sm">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <a href="mailto:contact@vasudharavi.com" className="hover:text-gold transition-colors">
                contact@vasudharavi.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Chennai, Tamil Nadu<br/>India</span>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-lg text-cream tracking-wide uppercase">Social</h4>
          <p className="font-body text-sm opacity-75 mb-2">Connect and listen online</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 lg:px-12 border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs opacity-60">
        <p>© {new Date().getFullYear()} Vasudha Ravi. All rights reserved.</p>
        <p>vasudharavi.com</p>
      </div>
    </footer>
  );
}
