import './App.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Plans from './Plans/Plans';
import Blogs from './Blogs/Blogs';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App main-grid">
      <div className="App-container">
        <Header />
        <Hero />
        <Features />
        <BrowserRouter>
          <Plans />
        </BrowserRouter>
        <Blogs />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;


// OAuth ID : 931406463975-senru2eirf3vtjrl527t1k3jnbom0iap.apps.googleusercontent.com