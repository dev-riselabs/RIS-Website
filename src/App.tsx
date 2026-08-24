import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import StoryWorlds from './pages/StoryWorlds'
import Experiences from './pages/Experiences'
import Platforms from './pages/Platforms'
import AiCreativeLab from './pages/AiCreativeLab'
import Impact from './pages/Impact'
import Newsroom from './pages/Newsroom'
import Contact from './pages/Contact'
import Partnership from './pages/Partnership'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story-worlds" element={<StoryWorlds />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/ai-creative-lab" element={<AiCreativeLab />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App