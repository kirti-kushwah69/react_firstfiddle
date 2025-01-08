import Home from './component/Home'
import Header from './component/layout/Header'
import Footer from "./component/layout/Footer";
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Brand from './component/Brand';
import OurTeam from './component/OurTeam';
import PressRelease from './component/PressRelease';
import Contact from './component/Contact';
import Careers from './component/Careers';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="brand" element={<Brand />} />
        <Route path="ourteam" element={<OurTeam />} />
        <Route path="pressrelease" element={<PressRelease />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App