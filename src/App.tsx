import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SesameOil from "./pages/SesameOil";
import BlackseedOil from "./pages/BlackseedOil";
import Contact from "./pages/Contact";
import ScrollToTop from "./ui/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import "./global.css";
import FlaxseedOil from "./pages/FlaxseedOil";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <main>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sesame-oil" element={<SesameOil />} />
              <Route path="/blackseed-oil" element={<BlackseedOil />} />
              <Route path="/flaxseed-oil" element={<FlaxseedOil />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ScrollToTop>
        </main>
      </div>
    </Router>
  );
}

export default App;
