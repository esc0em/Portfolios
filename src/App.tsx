import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { ToastProvider } from './contexts/ToastContext'

function App() {
  return (
    <ToastProvider>
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
    </ToastProvider>
  )
}

export default App
