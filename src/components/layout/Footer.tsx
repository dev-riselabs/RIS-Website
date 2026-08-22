import React from 'react'
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

      <div className="relative z-10 mx-[10%] px-6 md:px-12 flex flex-col gap-20 ">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-12 pt-16">
          <div className="flex-shrink-0 bg-white p-3 w-56 lg:w-64 rounded-sm shadow-md">
            <img src="/RIS_LOGO.png" alt="Rise Interactive Studios" className="w-full h-auto object-contain" />
          </div>
          <p className="text-white/90 text-[15px] leading-relaxed  text-center lg:text-left">
            Rise Interactive Studios is an AI Native creative innovation and futuristic media company whose work is
            at the centre point of Film, Music, Culture and Technology. We produce world-class intellectual
            property content and experiences by creating market-generating platforms and blending data and
            storytelling that amplify voices, inspire action, drive social impact, empower communities and influence
            policy to strengthen Africa's position as a leader in the global creative economy.
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-lg text-white">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-[13px] text-white/80">
            <div className="flex flex-col gap-4">
              <Link to="/" className="hover:text-white transition-colors">Welcome</Link>
              <Link to="/about" className="hover:text-white transition-colors">Our Story</Link>
              <Link to="/about" className="hover:text-white transition-colors">Vision</Link>
              <Link to="/about" className="hover:text-white transition-colors">Leadership</Link>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">Original Series</a>
              <a href="#" className="hover:text-white transition-colors">Films</a>
              <a href="#" className="hover:text-white transition-colors">Books & Biographies</a>
              <a href="#" className="hover:text-white transition-colors">DeyMake</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">Original Series</a>
              <a href="#" className="hover:text-white transition-colors">Innovation</a>
              <a href="#" className="hover:text-white transition-colors">Creative Technology</a>
              <a href="#" className="hover:text-white transition-colors">AI Storytelling</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">Makemation National AI Festival</a>
              <a href="#" className="hover:text-white transition-colors">Makemation UK-Nigerian AI Festival</a>
              <a href="#" className="hover:text-white transition-colors">Invest Lagos</a>
              <a href="#" className="hover:text-white transition-colors">Humachines Making Films Challenge</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">AI Storytelling</a>
              <a href="#" className="hover:text-white transition-colors">Newsroom</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          {/* Socials & Contact */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-white/20">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-[15px] text-white">Get in touch</h4>
              <a href="mailto:we@riseinteractivestudios.com" className="text-[13px] text-white/80 hover:text-white transition-colors">
                Information & Partnerships: we@riseinteractivestudios.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-100 opacity-60 transition-opacity" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00005 4.7998C6.23505 4.7998 4.80005 6.2348 4.80005 7.9998V23.9998C4.80005 25.7648 6.23505 27.1998 8.00005 27.1998H12.91V19.9098H10.27V15.9998H12.91V14.3148C12.91 9.9598 14.88 7.9398 19.16 7.9398C19.97 7.9398 21.37 8.0998 21.945 8.2598V11.7998C21.645 11.7698 21.12 11.7498 20.465 11.7498C18.365 11.7498 17.555 12.5448 17.555 14.6098V15.9998H21.7351L21.015 19.9098H17.55V27.1998H24C25.765 27.1998 27.2 25.7648 27.2 23.9998V7.9998C27.2 6.2348 25.765 4.7998 24 4.7998H8.00005Z" fill="white"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-100 opacity-60 transition-opacity" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.015 10.2498C12.84 10.2398 10.26 12.8098 10.25 15.9848C10.24 19.1598 12.81 21.7398 15.985 21.7498C19.16 21.7598 21.74 19.1898 21.75 16.0148C21.76 12.8398 19.19 10.2598 16.015 10.2498ZM15.985 12.2698C18.045 12.2598 19.72 13.9248 19.73 15.9848C19.74 18.0448 18.075 19.7198 16.015 19.7298C13.955 19.7398 12.28 18.0748 12.27 16.0148C12.26 13.9548 13.925 12.2798 15.985 12.2698ZM20.655 10.0148C20.655 9.27477 21.255 8.67477 21.995 8.67477C22.735 8.67477 23.335 9.27477 23.335 10.0148C23.335 10.7548 22.735 11.3548 21.995 11.3548C21.255 11.3548 20.655 10.7548 20.655 10.0148ZM27.14 11.3748C27.055 9.57977 26.645 7.98977 25.33 6.67977C24.02 5.36977 22.43 4.95977 20.635 4.86977C18.785 4.76477 13.24 4.76477 11.39 4.86977C9.60002 4.95477 8.01002 5.36477 6.69502 6.67477C5.38002 7.98477 4.97502 9.57477 4.88502 11.3698C4.78002 13.2198 4.78002 18.7648 4.88502 20.6148C4.97002 22.4098 5.38002 23.9998 6.69502 25.3098C8.01002 26.6198 9.59502 27.0298 11.39 27.1198C13.24 27.2248 18.785 27.2248 20.635 27.1198C22.43 27.0348 24.02 26.6248 25.33 25.3098C26.64 23.9998 27.05 22.4098 27.14 20.6148C27.245 18.7648 27.245 13.2248 27.14 11.3748ZM24.75 22.5998C24.36 23.5798 23.605 24.3348 22.62 24.7298C21.145 25.3148 17.645 25.1798 16.015 25.1798C14.385 25.1798 10.88 25.3098 9.41002 24.7298C8.43002 24.3398 7.67502 23.5848 7.28003 22.5998C6.69502 21.1248 6.83002 17.6248 6.83002 15.9948C6.83002 14.3648 6.70002 10.8598 7.28003 9.38977C7.67002 8.40977 8.42502 7.65477 9.41002 7.25977C10.885 6.67477 14.385 6.80977 16.015 6.80977C17.645 6.80977 21.15 6.67977 22.62 7.25977C23.6 7.64977 24.355 8.40477 24.75 9.38977C25.335 10.8648 25.2 14.3648 25.2 15.9948C25.2 17.6248 25.335 21.1298 24.75 22.5998Z" fill="white"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-100 opacity-60 transition-opacity" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00005 4.7998C6.23505 4.7998 4.80005 6.2348 4.80005 7.9998V23.9998C4.80005 25.7648 6.23505 27.1998 8.00005 27.1998H24C25.765 27.1998 27.2 25.7648 27.2 23.9998V7.9998C27.2 6.2348 25.765 4.7998 24 4.7998H8.00005ZM8.25005 13.3098H11.575V23.9998H8.25005V13.3098ZM11.835 9.9248C11.835 10.9898 10.975 11.8498 9.91005 11.8498C8.84505 11.8498 7.98505 10.9898 7.98505 9.9248C7.98505 8.8598 8.84505 7.9998 9.91005 7.9998C10.975 7.9998 11.835 8.8598 11.835 9.9248ZM20.695 23.9998V18.7998C20.695 17.5598 20.67 15.9648 18.97 15.9648C17.24 15.9648 16.975 17.3148 16.975 18.7098V23.9998H13.655V13.3098H16.84V14.7698H16.885C17.33 13.9298 18.415 13.0448 20.03 13.0448C23.39 13.0448 24.015 15.2598 24.015 18.1398V23.9998H20.695Z" fill="white"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-100 opacity-60 transition-opacity" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.085 9.40539C28.775 8.22039 27.845 7.29039 26.67 6.97539C24.545 6.40039 16.005 6.40039 16.005 6.40039C16.005 6.40039 7.46498 6.40039 5.33498 6.97539C4.15998 7.29039 3.23498 8.22039 2.91998 9.40539C2.34998 11.5504 2.34998 16.0204 2.34998 16.0204C2.34998 16.0204 2.34998 20.4904 2.91998 22.6354C3.23498 23.8154 4.15998 24.7104 5.33498 25.0254C7.46498 25.6004 16.005 25.6004 16.005 25.6004C16.005 25.6004 24.545 25.6004 26.675 25.0254C27.85 24.7104 28.775 23.8154 29.09 22.6354C29.66 20.4904 29.66 16.0204 29.66 16.0204C29.66 16.0204 29.66 11.5504 29.09 9.40539H29.085ZM13.21 20.0804V11.9604L20.345 16.0204L13.21 20.0804Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 pt-4">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors underline underline-offset-2">Terms and Conditions</a>
              <a href="#" className="hover:text-white transition-colors underline underline-offset-2">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors underline underline-offset-2">Accessibility Policy</a>
            </div>
            <p>© 2026 Rise Interactive Studios. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
