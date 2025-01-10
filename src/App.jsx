import "./App.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Programs from "./pages/Programs/Programs";
import Admissions from "./pages/Admissions/Admissions";

import { Route, Routes, useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="about" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
