import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/MobileStyles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './pages/Services/Services';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import Team from './components/Team/Team';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
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
                  <About />
                </section>
                <div className="section-divider" />
                <section className="section-light">
                  <PracticeAreas />
                </section>
                <div className="section-divider" />
                <section className="section-dark">
                  <Team />
                </section>
              </div>
            } />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
