import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpg';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownClicked) {
        const target = event.target as HTMLElement;
        if (!target.closest('.about-dropdown-container')) {
          setIsAboutDropdownOpen(false);
          setIsDropdownClicked(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownClicked]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsAboutDropdownOpen(false);
      setIsDropdownClicked(false);
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownClicked(true);
    setIsAboutDropdownOpen(true);
  };

  const handleMouseEnter = () => {
    if (!isDropdownClicked) {
      setIsAboutDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isDropdownClicked) {
      setIsAboutDropdownOpen(false);
    }
  };

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'standards', label: 'Standards' },
    { id: 'contact', label: 'Contact' }
  ];

  const aboutDropdownLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'awards', label: 'Awards' },
    { id: 'team', label: 'Team' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src={logo} 
              alt="EA Aurelio Landscape Architects" 
              className={`h-10 md:h-12 w-auto transition-all ${
                isScrolled ? '' : 'drop-shadow-lg'
              }`}
            />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`tracking-wide transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* About Dropdown */}
            <div 
              className="relative about-dropdown-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={handleAboutClick}
                className={`tracking-wide transition-colors hover:opacity-70 flex items-center gap-1 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-sm min-w-[160px] py-2">
                  {aboutDropdownLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="w-full text-left px-6 py-2 text-black hover:bg-gray-100 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl tracking-wide hover:opacity-70 transition-opacity"
              >
                {link.label}
              </button>
            ))}
            
            {/* About Dropdown in Mobile */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="text-2xl tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2"
              >
                About
                <ChevronDown className={`w-5 h-5 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutDropdownOpen && (
                <div className="flex flex-col items-center gap-4">
                  {aboutDropdownLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-xl tracking-wide hover:opacity-70 transition-opacity text-gray-700"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}