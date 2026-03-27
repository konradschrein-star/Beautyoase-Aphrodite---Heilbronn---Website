import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Phone, Menu, X, Instagram, Facebook, Mail, ArrowRight, MapPin, Clock } from 'lucide-react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-rose-accent pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(225, 155, 160, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
    />
  );
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Über mich', href: '/ueber-mich' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <img src="/imgi_1_BEAUTYOASE-APHRODITE.png" alt="Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight text-ink group-hover:text-rose-accent transition-colors">Beautyoase Aphrodite</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-rose-accent font-semibold -mt-1">Kristina Eberwein</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium hover:text-rose-accent transition-colors relative group whitespace-nowrap ${location.pathname === link.href ? 'text-rose-accent' : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-rose-accent transition-all ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <div className="flex items-center space-x-3 ml-2">
            <a href="tel:017647744444" className="p-2 bg-sage-soft rounded-full hover:bg-sage-accent transition-colors shrink-0">
              <Phone className="w-4 h-4" />
            </a>
            <a 
              href="https://termin.beautyoase-aphrodite.coprog.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs whitespace-nowrap"
            >
              Termin buchen
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden glass-dark z-50 flex flex-col justify-center items-center"
          >
            <button className="absolute top-6 right-6 p-2" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-4xl font-serif hover:text-rose-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-6 pt-8 border-t border-black/5">
                <a href="tel:017647744444" className="flex items-center justify-center space-x-3 text-2xl font-serif">
                  <Phone className="w-6 h-6 text-rose-accent" />
                  <span>0176 47744444</span>
                </a>
                <a 
                  href="https://termin.beautyoase-aphrodite.coprog.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-xl py-5"
                >
                  Online Termin buchen
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <footer className="bg-ink text-white py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <img src="/imgi_11_Kosmetikstudio-Heilbronn.jpg" alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-accent via-sage-accent to-rose-accent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-4 mb-12">
              <img src="/imgi_23_Footer-logo.png" alt="Logo" className="h-20 w-auto" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif font-bold tracking-tighter break-words">Beautyoase Aphrodite</span>
                <span className="text-xs uppercase tracking-[0.5em] text-rose-accent font-black mt-3">Kristina Eberwein</span>
              </div>
            </div>
            <p className="text-2xl text-white/40 leading-relaxed max-w-md font-light mb-12">
              Dein exklusives Kosmetikstudio in Heilbronn. Wir vereinen höchste Präzision mit einer Atmosphäre purer Entspannung.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white/60">
                <MapPin className="w-5 h-5 text-rose-accent" />
                <span className="text-lg">Pfühlstraße 54, 74076 Heilbronn</span>
              </div>
              <div className="flex items-center space-x-4 text-white/60">
                <Phone className="w-5 h-5 text-rose-accent" />
                <a href="tel:017647744444" className="text-lg hover:text-white transition-colors">0176 47744444</a>
              </div>
              <div className="flex items-center space-x-4 text-white/60">
                <Clock className="w-5 h-5 text-rose-accent" />
                <span className="text-lg">Mo – Fr: 09:00 – 17:00 Uhr</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-black uppercase tracking-[0.4em] text-[10px] mb-10 text-white/30">Navigation</h4>
            <ul className="space-y-6 text-xl font-light">
              <li><Link to="/" className="hover:text-rose-accent transition-colors">Start</Link></li>
              <li><Link to="/leistungen" className="hover:text-rose-accent transition-colors">Leistungen</Link></li>
              <li><Link to="/ueber-mich" className="hover:text-rose-accent transition-colors">Über mich</Link></li>
              <li><Link to="/galerie" className="hover:text-rose-accent transition-colors">Galerie</Link></li>
              <li><Link to="/kontakt" className="hover:text-rose-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="font-black uppercase tracking-[0.4em] text-[10px] mb-10 text-white/30">Newsletter</h4>
            <p className="text-white/40 mb-8 text-lg font-light">Erhalte exklusive Angebote und Beauty-Tipps direkt in dein Postfach.</p>
            <form onSubmit={handleSubmit} className="relative mb-12">
              <input 
                type="email" 
                placeholder="Deine E-Mail Adresse" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-full py-6 px-10 text-lg focus:outline-none focus:border-rose-accent transition-colors"
              />
              <button type="submit" className="absolute right-3 top-3 bottom-3 bg-rose-accent hover:bg-rose-accent/80 text-white px-8 rounded-full transition-all flex items-center space-x-2">
                <span className="font-bold">Senden</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-8 left-10 text-rose-accent text-xs font-bold uppercase tracking-widest"
                  >
                    Vielen Dank für deine Anmeldung!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
            
            <h4 className="font-black uppercase tracking-[0.4em] text-[10px] mb-8 text-white/30">Social Media</h4>
            <div className="flex space-x-6">
              <a href="#" className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-rose-accent transition-all hover:-translate-y-2 group">
                <Instagram className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-rose-accent transition-all hover:-translate-y-2 group">
                <Facebook className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-white/30 text-sm">
          <p>© {new Date().getFullYear()} Beautyoase Aphrodite – Kristina Eberwein. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="https://axtrelis.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors group flex items-center space-x-2">
              <span>Created by</span>
              <span className="font-black text-white group-hover:text-rose-accent transition-colors">Axtrelis.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-off-white text-ink selection:bg-rose-accent selection:text-white">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-rose-accent z-[60] origin-left" style={{ scaleX }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
