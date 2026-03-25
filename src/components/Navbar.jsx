import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/concerts', label: 'Concerts' },
  { path: '/music', label: 'Music' },
  { path: '/teaching', label: 'Teaching' },
  { path: '/media', label: 'Media' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-4' 
      : (isHome ? 'bg-transparent py-6' : 'bg-cream py-6 shadow-sm')
  }`;

  const linkClass = (isActive) => `
    relative font-body text-lg uppercase tracking-wider text-sm transition-colors duration-300
    ${isScrolled || !isHome ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold'}
    ${isActive ? (isScrolled || !isHome ? 'text-gold' : 'text-gold') : ''}
    group
  `;

  const underlineClass = (isActive) => `
    absolute -bottom-1 left-0 w-full h-[1px] bg-gold origin-left transition-transform duration-300
    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
  `;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Music className={`w-5 h-5 transition-colors duration-300 ${isScrolled || !isHome ? 'text-gold' : 'text-gold-light'}`} />
          <span className={`font-display italic text-2xl tracking-wide transition-colors duration-300 ${isScrolled || !isHome ? 'text-charcoal' : 'text-cream'}`}>
            Vasudha Ravi
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => linkClass(isActive)}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <div className={underlineClass(isActive)} />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled || !isHome ? 'text-charcoal' : 'text-cream'} />
          ) : (
            <Menu className={isScrolled || !isHome ? 'text-charcoal' : 'text-cream'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-parchment overflow-hidden transition-all duration-300 border-t border-gold/20 ${mobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="flex flex-col py-4 px-6 gap-4 border-b border-gold/10">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => `
                font-body text-xl tracking-wider text-charcoal hover:text-gold transition-colors block
                ${isActive ? 'text-gold font-medium' : ''}
              `}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
