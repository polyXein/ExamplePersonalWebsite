import './App.css';
import { Routes, Route} from "react-router-dom";

import Home from './components/home/Home.jsx'
import Layout from './components/Layout/Layout'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'


function App() {
  return (
    
    <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

  );
}

export default App;
