import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Navbar from './components/Navbar';

// pages qovlugundan gelenler
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';


import Footer from './components/Footer';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />


    <Routes>

    <Route path='/' element={<Home />}  />
    <Route path="*" element={<NotFound />} />
    <Route path="/about" element={<About />} />
    <Route path="/xidmetlerimiz" element={<Services />} />
    <Route path="/blog" element = {<Blog />} />
    <Route path="/elaqe" element = {<Contact />} />
    

    </Routes>


    <Footer />
    </BrowserRouter>
 
    </>

  );
  
}

export default App;
