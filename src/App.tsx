import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const StoryWorlds = lazy(() => import('./pages/StoryWorlds'))
const Experiences = lazy(() => import('./pages/Experiences'))
const Platforms = lazy(() => import('./pages/Platforms'))
const AiCreativeLab = lazy(() => import('./pages/AiCreativeLab'))
const Impact = lazy(() => import('./pages/Impact'))
const Newsroom = lazy(() => import('./pages/Newsroom'))
const Contact = lazy(() => import('./pages/Contact'))
const Partnership = lazy(() => import('./pages/Partnership'))

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App