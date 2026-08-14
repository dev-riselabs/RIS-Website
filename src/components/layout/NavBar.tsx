import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to="/" className="text-primary hover:opacity-80 transition-opacity">Welcome</Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center hover:opacity-80 transition-opacity">About <ChevronDown /></Link>
          </li>
        <li>
          <Link to="/story-worlds" className="flex items-center hover:opacity-80 transition-opacity">Story Worlds <ChevronDown /></Link>
        </li>
        <li>
          <Link to="/experiences" className="flex items-center hover:opacity-80 transition-opacity">Experiences <ChevronDown /></Link>
        </li>
        <li>
          <Link to="/platforms" className="flex items-center hover:opacity-80 transition-opacity">Platforms <ChevronDown /></Link>
        </li>
        <li>
          <Link to="/ai-creative-lab" className="flex items-center hover:opacity-80 transition-opacity">AI Creative Lab <ChevronDown /></Link>
        </li>
        <li>
          <Link to="/impact" className="hover:opacity-80 transition-opacity">Impact</Link>
        </li>
        <li>
          <Link to="/newsroom" className="hover:opacity-80 transition-opacity">Newsroom</Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center hover:opacity-80 transition-opacity">
            Contact
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
