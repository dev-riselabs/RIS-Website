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
          className="xl:hidden p-2 text-white hover:text-primary transition-colors relative z-50" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex space-x-6 2xl:space-x-8 items-center font-medium text-sm">
          <li>
            <Link to="/" className={getLinkClass('/')}>Welcome</Link>
          </li>
          <li className="group relative">
            <Link to="/about" className={getLinkClass('/about', true)}>About <ChevronDown /></Link>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[200px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/about" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Our Story</Link>
                <Link to="/about" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Vision</Link>
                <Link to="/about" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Leadership</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <Link to="/story-worlds" className={getLinkClass('/story-worlds', true)}>Story Worlds <ChevronDown /></Link>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[220px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/story-worlds" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Films</Link>
                <Link to="/story-worlds" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Books & Biographies</Link>
                <Link to="/story-worlds" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Original Series</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <Link to="/experiences" className={getLinkClass('/experiences', true)}>Experiences <ChevronDown /></Link>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[280px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/experiences" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Makemation National AI Festival</Link>
                <Link to="/experiences" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Makemation UK–Nigerian AI Festival</Link>
                <Link to="/experiences" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">AFRIFF AI Workshop & Cultural Dialogue</Link>
                <Link to="/experiences" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Invest Lagos</Link>
                <Link to="/experiences" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Humachines Making Films Challenge</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <Link to="/platforms" className={getLinkClass('/platforms', true)}>Platforms <ChevronDown /></Link>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[200px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/platforms" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">DeyMake</Link>
              </div>
            </div>
          </li>
          <li className="group relative">
            <Link to="/ai-creative-lab" className={getLinkClass('/ai-creative-lab', true)}>AI Creative Lab <ChevronDown /></Link>
            <div className="absolute left-0 top-full pt-4 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 min-w-[220px]">
              <div className="rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden">
                <Link to="/ai-creative-lab" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Innovation</Link>
                <Link to="/ai-creative-lab" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">Creative Technology</Link>
                <Link to="/ai-creative-lab" className="px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#f3f4f6] hover:text-primary transition-colors">AI Storytelling</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/impact" className={getLinkClass('/impact')}>Impact</Link>
          </li>
          <li>
            <Link to="/newsroom" className={getLinkClass('/newsroom')}>Newsroom</Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-start transition-all duration-500 ease-in-out xl:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <ul className={`flex flex-col items-center justify-start w-full transform transition-all duration-700 ease-out delay-75 h-full overflow-y-auto pb-24 pt-20 px-4 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
            <li>
              <Link to="/" className={getMobileLinkClass('/')} onClick={closeMenu}>Welcome</Link>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <Link to="/about" className={getMobileLinkClass('/about')} onClick={closeMenu}>About</Link>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/about" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Our Story</Link>
                <Link to="/about" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Vision</Link>
                <Link to="/about" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Leadership</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <Link to="/story-worlds" className={getMobileLinkClass('/story-worlds')} onClick={closeMenu}>Story Worlds</Link>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/story-worlds" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Films</Link>
                <Link to="/story-worlds" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Books & Biographies</Link>
                <Link to="/story-worlds" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Original Series</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <Link to="/experiences" className={getMobileLinkClass('/experiences')} onClick={closeMenu}>Experiences</Link>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/experiences" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Makemation National AI Festival</Link>
                <Link to="/experiences" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Makemation UK–Nigerian AI Festival</Link>
                <Link to="/experiences" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>AFRIFF AI Workshop</Link>
                <Link to="/experiences" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Invest Lagos</Link>
                <Link to="/experiences" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Humachines Challenge</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <Link to="/platforms" className={getMobileLinkClass('/platforms')} onClick={closeMenu}>Platforms</Link>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/platforms" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>DeyMake</Link>
              </div>
            </li>
            
            <li className="flex flex-col items-center w-full">
              <Link to="/ai-creative-lab" className={getMobileLinkClass('/ai-creative-lab')} onClick={closeMenu}>AI Creative Lab</Link>
              <div className="flex flex-col items-center space-y-3 mt-3 w-full bg-white/5 rounded-xl py-3">
                <Link to="/ai-creative-lab" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Innovation</Link>
                <Link to="/ai-creative-lab" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>Creative Technology</Link>
                <Link to="/ai-creative-lab" className="text-white/80 text-sm font-medium hover:text-white" onClick={closeMenu}>AI Storytelling</Link>
              </div>
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
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
