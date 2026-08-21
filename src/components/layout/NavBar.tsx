import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 mt-0.5">
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getLinkClass = (path: string, hasIcon: boolean = false) => {
    const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    return `py-2 transition-all ${hasIcon ? 'flex items-center' : 'block'} ${isActive ? 'text-primary font-bold' : 'text-white hover:text-primary hover:opacity-80'}`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    return `block text-2xl font-semibold tracking-wide transition-all duration-300 hover:scale-110 ${isActive ? 'text-primary scale-110' : 'text-white hover:text-primary'}`;
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      {/* Top Bar - Always Visible */}
      <div className="relative z-50 flex items-center justify-between px-[5%] md:px-[10%] py-4 md:py-6 w-full">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="relative z-50">
          <img src="/RIS_LOGO.png" alt="Rise Interactive Studios" className="h-10 md:h-14 w-auto drop-shadow-md" />
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white hover:text-primary transition-colors relative z-50" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-10 items-center font-medium text-sm">
          <li>
            <Link to="/" className={getLinkClass('/')}>Welcome</Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass('/about', true)}>About <ChevronDown /></Link>
          </li>
          <li>
            <Link to="/story-worlds" className={getLinkClass('/story-worlds', true)}>Story Worlds <ChevronDown /></Link>
          </li>
          <li>
            <Link to="/experiences" className={getLinkClass('/experiences', true)}>Experiences <ChevronDown /></Link>
          </li>
          <li>
            <Link to="/platforms" className={getLinkClass('/platforms', true)}>Platforms <ChevronDown /></Link>
          </li>
          <li>
            <Link to="/ai-creative-lab" className={getLinkClass('/ai-creative-lab', true)}>AI Creative Lab <ChevronDown /></Link>
          </li>
          <li>
            <Link to="/impact" className={getLinkClass('/impact')}>Impact</Link>
          </li>
          <li>
            <Link to="/newsroom" className={getLinkClass('/newsroom')}>Newsroom</Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <ul className={`flex flex-col items-center justify-center w-full space-y-8 transform transition-all duration-700 ease-out delay-75 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <li>
            <Link to="/" className={getMobileLinkClass('/')} onClick={closeMenu}>Welcome</Link>
          </li>
          <li>
            <Link to="/about" className={getMobileLinkClass('/about')} onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/story-worlds" className={getMobileLinkClass('/story-worlds')} onClick={closeMenu}>Story Worlds</Link>
          </li>
          <li>
            <Link to="/experiences" className={getMobileLinkClass('/experiences')} onClick={closeMenu}>Experiences</Link>
          </li>
          <li>
            <Link to="/platforms" className={getMobileLinkClass('/platforms')} onClick={closeMenu}>Platforms</Link>
          </li>
          <li>
            <Link to="/ai-creative-lab" className={getMobileLinkClass('/ai-creative-lab')} onClick={closeMenu}>AI Creative Lab</Link>
          </li>
          <li>
            <Link to="/impact" className={getMobileLinkClass('/impact')} onClick={closeMenu}>Impact</Link>
          </li>
          <li>
            <Link to="/newsroom" className={getMobileLinkClass('/newsroom')} onClick={closeMenu}>Newsroom</Link>
          </li>
          <li>
            <Link to="/contact" className={getMobileLinkClass('/contact')} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
