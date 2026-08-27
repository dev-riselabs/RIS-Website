import { Link } from 'react-router-dom'

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

      <div className="relative z-10 mx-[10%] px-6 md:px-12 flex flex-col gap-15 lg:gap-20 ">
        
        {/* Top: Logo & Description */}
        <div className="flex flex-col md:flex-row gap-6 items-start w-full pt-16">
          <div className="w-full md:w-1/4 lg:w-1/6 shrink-0">
            <div className="bg-white p-2 inline-block rounded-sm shadow-md">
              <img src="/RIS_LOGO.png" alt="Rise Interactive Studios Logo" className="h-16 md:h-20 object-contain" />
            </div>
          </div>
          <div className="w-full pt-2">
            <p className="text-white text-[14px] md:text-[15px] leading-relaxed">
              Rise Interactive Studios is an AI Native creative innovation and futuristic media company whose work is at the centre point of Film, Music, Culture and Technology. We produce world-class intellectual property content and experiences by creating market-generating platforms and blending data and storytelling that amplify voices, inspire action, drive social impact, empower communities and influence policy to strengthen Africa's position as a leader in the global creative economy.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-white text-[16px]">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6">
            <div className="flex flex-col gap-3 text-white/80 text-[14px]">
              <Link to="/" className="hover:text-white transition-colors">Welcome</Link>
              <Link to="/about" className="hover:text-white transition-colors">Our Story</Link>
              <Link to="/vision" className="hover:text-white transition-colors">Vision</Link>
              <Link to="/leadership" className="hover:text-white transition-colors">Leadership</Link>
            </div>
            <div className="flex flex-col gap-3 text-white/80 text-[14px]">
              <Link to="/original-series" className="hover:text-white transition-colors">Original Series</Link>
              <Link to="/films" className="hover:text-white transition-colors">Films</Link>
              <Link to="/books" className="hover:text-white transition-colors">Books & Biographies</Link>
              <Link to="/deymake" className="hover:text-white transition-colors">DeyMake</Link>
            </div>
            <div className="flex flex-col gap-3 text-white/80 text-[14px]">
              <Link to="/original-series" className="hover:text-white transition-colors">Original Series</Link>
              <Link to="/innovation" className="hover:text-white transition-colors">Innovation</Link>
              <Link to="/creative-tech" className="hover:text-white transition-colors">Creative Technology</Link>
              <Link to="/ai-storytelling" className="hover:text-white transition-colors">AI Storytelling</Link>
            </div>
            <div className="flex flex-col gap-3 text-white/80 text-[14px]">
              <Link to="/makemation-national" className="hover:text-white transition-colors">Makemation National AI Festiva</Link>
              <Link to="/makemation-uk" className="hover:text-white transition-colors">Makemation UK–Nigerian AI Festival</Link>
              <Link to="/invest-lagos" className="hover:text-white transition-colors">Invest Lagos</Link>
              <Link to="/humachines" className="hover:text-white transition-colors">Humachines Making Films Challenge</Link>
            </div>
            <div className="flex flex-col gap-3 text-white/80 text-[14px]">
              <Link to="/ai-storytelling" className="hover:text-white transition-colors">AI Storytelling</Link>
              <Link to="/newsroom" className="hover:text-white transition-colors">Newsroom</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Get in Touch & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-white text-[16px]">Get in touch</h3>
            <p className="text-white/80 text-[14px]">
              Information & Partnerships: <a href="mailto:we@riseinteractivestudios.com" className="hover:text-white transition-colors">we@riseinteractivestudios.com</a>
            </p>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 text-[13px] text-white/80 pb-8">
          <div className="flex flex-wrap gap-4 mb-1">
            <Link to="/terms" className="hover:text-white underline underline-offset-2">Terms and Conditions</Link>
            <Link to="/privacy" className="hover:text-white underline underline-offset-2">Privacy Policy</Link>
            <Link to="/accessibility" className="hover:text-white underline underline-offset-2">Accessibility Policy</Link>
          </div>
          <p>© 2026 Rise Interactive Studios. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
