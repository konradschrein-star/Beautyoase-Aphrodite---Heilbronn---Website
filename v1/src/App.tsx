import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Services />} />
            <Route path="/ueber-mich" element={<About />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
};

export default App;
