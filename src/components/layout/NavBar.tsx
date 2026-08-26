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


const CaretIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className={`${active ? 'text-primary' : 'text-white/40'} mr-1.5 shrink-0`}>
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const NavLink = ({ to, children, className }: { to: string, children: React.ReactNode, className?: string }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  return (
    <Link to={to} className={className || `py-2 transition-all flex items-center ${isActive ? 'text-primary font-bold' : 'text-white hover:text-primary hover:opacity-80'}`}>
      <CaretIcon active={isActive} />
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick, className }: { to: string, children: React.ReactNode, onClick: () => void, className?: string }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  return (
    <Link to={to} className={className || `block text-2xl font-semibold tracking-wide transition-all duration-300 hover:scale-110 flex items-center justify-center ${isActive ? 'text-primary scale-110' : 'text-white hover:text-primary'}`} onClick={onClick}>
      <CaretIcon active={isActive} />
      {children}
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          className="2xl:hidden p-2 text-white hover:text-primary transition-colors relative z-50" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden 2xl:flex space-x-6 2xl:space-x-8 items-center font-medium text-sm">
          <li>
            <NavLink to="/">Welcome</NavLink>
          </li>
          <li className="group relative">
            <NavLink to="/about">About <ChevronDown /></NavLink>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[200px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/about#our-story" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Our Story</Link>
                <Link to="/about#vision" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Vision</Link>
                <Link to="/about#leadership" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Leadership</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <NavLink to="/story-worlds">Story Worlds <ChevronDown /></NavLink>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[220px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/story-worlds#films" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Films</Link>
                <Link to="/story-worlds#books" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Books & Biographies</Link>
                <Link to="/story-worlds#series" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Original Series</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <NavLink to="/experiences">Experiences <ChevronDown /></NavLink>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[280px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/experiences#makemation-national" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Makemation National AI Festival</Link>
                <Link to="/experiences#makemation-uk" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Makemation UK–Nigerian AI Festival</Link>
                <Link to="/experiences#afriff" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">AFRIFF AI Workshop & Cultural Dialogue</Link>
                <Link to="/experiences#invest-lagos" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Invest Lagos</Link>
                <Link to="/experiences#humachines" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Humachines Making Films Challenge</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <NavLink to="/platforms">Platforms <ChevronDown /></NavLink>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[200px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/platforms#deymake" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">DeyMake</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <NavLink to="/ai-creative-lab">AI Creative Lab <ChevronDown /></NavLink>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[220px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/ai-creative-lab#innovation" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Innovation</Link>
                <Link to="/ai-creative-lab#creative-technology" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Creative Technology</Link>
                <Link to="/ai-creative-lab#ai-storytelling" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">AI Storytelling</Link>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/impact">Impact</NavLink>
          </li>
          <li>
            <NavLink to="/newsroom">Newsroom</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-start transition-all duration-500 ease-in-out 2xl:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <ul className={`flex flex-col items-center justify-start w-full transform transition-all duration-700 ease-out delay-75 h-full overflow-y-auto pb-24 pt-20 px-4 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
            <li>
              <MobileNavLink to="/" onClick={closeMenu}>Welcome</MobileNavLink>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <MobileNavLink to="/about" onClick={closeMenu}>About</MobileNavLink>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/about#our-story" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Our Story</Link>
                <Link to="/about#vision" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Vision</Link>
                <Link to="/about#leadership" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Leadership</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <MobileNavLink to="/story-worlds" onClick={closeMenu}>Story Worlds</MobileNavLink>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/story-worlds#films" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Films</Link>
                <Link to="/story-worlds#books" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Books & Biographies</Link>
                <Link to="/story-worlds#series" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Original Series</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <MobileNavLink to="/experiences" onClick={closeMenu}>Experiences</MobileNavLink>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/experiences#makemation-national" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Makemation National AI Festival</Link>
                <Link to="/experiences#makemation-uk" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Makemation UK–Nigerian AI Festival</Link>
                <Link to="/experiences#afriff" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>AFRIFF AI Workshop</Link>
                <Link to="/experiences#invest-lagos" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Invest Lagos</Link>
                <Link to="/experiences#humachines" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Humachines Challenge</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <MobileNavLink to="/platforms" onClick={closeMenu}>Platforms</MobileNavLink>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/platforms#deymake" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>DeyMake</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <MobileNavLink to="/ai-creative-lab" onClick={closeMenu}>AI Creative Lab</MobileNavLink>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/ai-creative-lab#innovation" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Innovation</Link>
                <Link to="/ai-creative-lab#creative-technology" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Creative Technology</Link>
                <Link to="/ai-creative-lab#ai-storytelling" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>AI Storytelling</Link>
              </div>
            </li>
            
            <li>
              <MobileNavLink to="/impact" onClick={closeMenu}>Impact</MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="/newsroom" onClick={closeMenu}>Newsroom</MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="/contact" onClick={closeMenu}>Contact</MobileNavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
