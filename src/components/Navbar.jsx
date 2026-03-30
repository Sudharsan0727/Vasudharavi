import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, Sparkle } from 'lucide-react';

const links = [
  { path: '/', label: 'Home' },
  { path: '#about', label: 'About' },
  { path: '#concerts', label: 'Concerts' },
  { path: '#music', label: 'Music' },
  { path: '#teaching', label: 'Teaching' },
  { path: '#media', label: 'Media' },
  { path: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full top-0 left-0 z-[100] transition-all duration-700 pointer-events-none px-6 lg:px-12 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      
      <div className={`
        mx-auto max-w-7xl h-20 lg:h-24 pointer-events-auto
        flex items-center justify-between px-8 lg:px-16
        transition-all duration-500 relative
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border border-gold/10 shadow-[0_20px_40px_rgba(0,0,0,0.05)] rounded-full h-16 lg:h-20 max-w-6xl' 
          : 'bg-transparent border-b border-gold/10 rounded-0'
        }
      `}>
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
             <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                <Music size={14} className="text-gold group-hover:text-white transition-colors" />
             </div>
             {/* Small sparkle accent */}
             <Sparkle size={10} className="absolute -top-1 -right-1 text-gold animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display italic text-2xl lg:text-3xl text-charcoal tracking-tight leading-none mb-1">
              Vasudha Ravi
            </span>
            <span className="text-[8px] font-body text-burgundy uppercase tracking-[0.4em] font-black">Classical Vocalist</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => `
                relative font-body text-[10px] uppercase tracking-[0.25em] font-black transition-all duration-300 py-2
                ${isActive ? 'text-burgundy' : 'text-charcoal/60 hover:text-gold'}
                group
              `}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Toggle */}
        <div className="flex items-center gap-6">
           <Link 
             to="/contact" 
             className={`hidden lg:flex px-6 py-2 border-2 border-charcoal text-charcoal font-body text-[8px] uppercase tracking-[0.3em] font-black hover:bg-charcoal hover:text-white transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}
           >
             Book Performance
           </Link>

           <button 
             className="md:hidden p-2 text-charcoal"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             aria-label="Toggle menu"
           >
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[90] flex flex-col items-center justify-center px-12 gap-12
          transition-all duration-700 ease-in-out
          ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 pointer-events-none'}
        `}>
           {/* Background Large Vasudha Watermark */}
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <span className="font-display text-[20vw] font-black italic">Vasudha</span>
           </div>

           <div className="relative z-10 flex flex-col items-center gap-8 w-full">
              {links.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className={({ isActive }) => `
                    font-display text-4xl italic transition-all duration-500
                    ${isActive ? 'text-burgundy' : 'text-charcoal/40 hover:text-charcoal'}
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
           </div>

           <Link 
              to="/about"
              className="mt-12 group flex items-center gap-4 border-b border-gold/30 pb-2"
           >
              <span className="font-body text-xs uppercase tracking-[0.4em] text-gold font-black">Learn More</span>
              <Sparkle size={14} className="text-gold group-hover:rotate-45 transition-transform" />
           </Link>
        </div>

      </div>
    </header>
  );
}
