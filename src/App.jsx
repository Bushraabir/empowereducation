import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About_us, Home, Features, Contact } from "./pages";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Loader from './components/Loader';



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-slate-300/20">
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
            <Route path="/empowereducation" element={<Home />} />
              <Route path='/about_us' element={<About_us />} />
              <Route path='/features' element={<Features />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </>
        )}
      </Router>
    </main>
  );
};

export default App;
