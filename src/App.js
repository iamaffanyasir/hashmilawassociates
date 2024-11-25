import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/MobileStyles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import HomeAbout from './components/About/About';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import HomePracticeAreas from './components/PracticeAreas/PracticeAreas';
import PracticeAreas from './pages/PracticeAreas/PracticeAreas';
import HomeTeam from './components/Team/Team';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="home-container">
                <section className="section-light">
                  <Hero />
                </section>
                <div className="section-divider" />
                <section className="section-dark">
                  <HomeAbout />
                </section>
                <div className="section-divider" />
                <section className="section-light">
                  <HomePracticeAreas />
                </section>
                <div className="section-divider" />
                <section className="section-dark">
                  <HomeTeam />
                </section>
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/practice" element={<PracticeAreas />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
