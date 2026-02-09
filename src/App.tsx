import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import ScrollToTop from './components/layout/scroll-to-top'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  )
}

export default App
