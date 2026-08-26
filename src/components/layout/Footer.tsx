import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const CaretIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className={`${active ? 'text-primary' : 'text-white/40'} mr-1.5 shrink-0`}>
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  return (
    <Link to={to} className={`flex items-center hover:text-white transition-colors ${isActive ? 'text-primary font-bold' : ''}`}>
      <CaretIcon active={isActive} />
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-surface pt-40 pb-12 text-white">
      {/* SVG Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 1064" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 86.6341C0 86.6341 283.196 209.002 548.438 209.002C813.679 209.002 949.747 42.5636 1106.44 6.85262C1263.13 -28.8584 1440 86.6341 1440 86.6341V1063.42H0V86.6341Z" fill="#052C6F"/>
          <mask id="mask0_0_1" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="1064">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 86.6341C0 86.6341 283.196 209.002 548.438 209.002C813.679 209.002 949.747 42.5636 1106.44 6.85262C1263.13 -28.8584 1440 86.6341 1440 86.6341V1063.42H0V86.6341Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_0_1)">
            <path fillRule="evenodd" clipRule="evenodd" d="M-155.813 72.8965L297.222 72.8965C297.222 72.8965 234.562 72.8965 313.312 229.475C359.198 320.709 432 421.251 432 515.194C432 619.851 379.619 685.192 352.969 813.351C327.301 936.787 413.24 1068.71 413.24 1068.71H-155.813V72.8965Z" fill="#052C6F"/>
            <path d="M1267.93 1076.98C1269.57 1073.93 1271.89 1069.55 1274.78 1064C1280.84 1052.4 1289.37 1035.64 1299.32 1015.03C1319.21 973.808 1344.76 917.13 1367.38 855.338C1389.99 793.571 1409.71 726.549 1417.88 664.672C1426.03 602.92 1422.76 545.615 1398.62 503.817C1384.93 480.115 1370.44 458.28 1356.44 437.205C1342.42 416.095 1328.92 395.773 1317.06 374.931C1293.41 333.331 1276.45 289.854 1275.66 234.878C1274.77 173.642 1294.5 128.638 1317.88 79.4C1341.27 30.158 1368.26 -23.1947 1380.72 -100.332C1392.77 -174.898 1376.77 -255.075 1357.92 -316.361C1348.48 -347.052 1338.29 -373.112 1330.46 -391.504C1326.55 -400.701 1323.22 -407.986 1320.87 -412.979C1320.52 -413.703 1320.2 -414.379 1319.9 -415.005L1884.22 -426.884L1801.88 1148.37L1267.93 1076.98Z" stroke="url(#paint0_linear_0_1)" strokeWidth="8"/>
            <defs>
              <linearGradient id="paint0_linear_0_1" x1="942.069" y1="340.876" x2="1765.58" y2="1145.29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#44BB3D"/>
                <stop offset="1" stopColor="#0F227F"/>
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-[10%] px-6 md:px-12 flex flex-col gap-20 ">
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-16 pb-8 w-full">
          
          {/* Column 1: Brand / Description */}
          <div className="flex flex-col gap-4 items-start">
            <div className="bg-white p-3 w-48 lg:w-56 rounded-sm shadow-md mb-2">
              <img src="/RIS_LOGO.png" alt="Rise Interactive Studios Logo" className="w-full h-auto object-contain" />
            </div>
            <h3 className="font-bold text-lg text-white tracking-widest uppercase">RISE INTERACTIVE STUDIOS</h3>
            <p className="text-white/80 text-[15px] leading-relaxed mt-1">
              Building Africa's Future Media Ecosystem.<br/>
              Stories, Experiences, Platforms, Innovation.
            </p>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white tracking-widest uppercase">MENU</h3>
            <div className="flex flex-col gap-3 text-[15px] text-white/80">
              <FooterLink to="/explore">Explore</FooterLink>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/story-worlds">Story Worlds</FooterLink>
              <FooterLink to="/experiences">Experiences</FooterLink>
              <FooterLink to="/platforms">Platforms</FooterLink>
              <FooterLink to="/ai-creative-lab">AI Creative Lab</FooterLink>
              <FooterLink to="/impact">Impact</FooterLink>
              <FooterLink to="/newsroom">Newsroom</FooterLink>
              <FooterLink to="/collaborate">Collaborate</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white tracking-widest uppercase">CONNECT</h3>
            <div className="flex flex-col gap-4 text-[15px] text-white/80">
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                YouTube
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                X
              </a>
            </div>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white tracking-widest uppercase">STAY CONNECTED</h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Subscribe for updates on new Story Worlds, Experiences, creator opportunities and innovation initiatives.
            </p>
            <form className="flex flex-col gap-4 mt-2 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border border-white/30 text-white placeholder:text-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors w-full rounded-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-[#052C6F] font-bold px-4 py-3 hover:bg-gray-100 transition-colors w-full text-center rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-start items-center border-t border-white/20 pt-8 pb-4 text-[13px] text-white/60 w-full">
          <p>© 2026 Rise Interactive Studios. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
