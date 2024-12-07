import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { About_us, Home, Features, Join_us, Contact } from "./pages"

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about_us' element={<About_us />} />
              <Route path='/features' element={<Features />} />
              <Route path='/join_us' element={<Join_us />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
           
        </Router>
    </main>
  )
}

export default App