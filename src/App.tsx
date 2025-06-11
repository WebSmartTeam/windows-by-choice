import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import WindowsPage from './pages/WindowsPage';
import DoorsPage from './pages/DoorsPage';
import ConservatoriesPage from './pages/ConservatoriesPage';
import LivingRoomsPage from './pages/LivingRoomsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPage from './pages/PrivacyPage';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/windows" element={<WindowsPage />} />
            <Route path="/doors" element={<DoorsPage />} />
            <Route path="/conservatories" element={<ConservatoriesPage />} />
            <Route path="/living-rooms" element={<LivingRoomsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;