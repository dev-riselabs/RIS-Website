import React from 'react'

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 mt-0.5">
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-[10%] py-6 text-white">
      {/* Logo */}
      <div className="-">
        <img src="/RIS_LOGO.png" alt="Rise Interactive Studios" className="h-14 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className=" flex justify-center">
        <ul className="flex space-x-10 items-center font-medium text-sm">
          <li>
            <a href="#" className="text-primary hover:opacity-80 transition-opacity">Welcome</a>
          </li>
          <li>
            <a href="#" className="flex items-center hover:opacity-80 transition-opacity">About <ChevronDown /></a>
          </li>
        <li>
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">Story Worlds <ChevronDown /></a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">Experiences <ChevronDown /></a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">Platforms <ChevronDown /></a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">AI Creative Lab <ChevronDown /></a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80 transition-opacity">Impact</a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80 transition-opacity">Newsroom</a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            Contact
          </a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
