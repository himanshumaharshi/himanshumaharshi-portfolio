import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import LargeHeader from "./components/core/LargeHeader";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <>
      <div className="h-screen w-screen overflow-auto relative">
        {/* background */}
        <div>
          <div className="absolute -z-50">
            <LargeHeader />
            <div className="grain -z-10"></div>
          </div>
        </div>
        
          <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
