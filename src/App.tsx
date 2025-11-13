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
              <Route path="/rawseedapp" element={<Home />} />
              <Route path="/rawseedapp/sesame-oil" element={<SesameOil />} />
              <Route
                path="/rawseedapp/blackseed-oil"
                element={<BlackseedOil />}
              />
              <Route
                path="/rawseedapp/flaxseed-oil"
                element={<FlaxseedOil />}
              />
              <Route path="/rawseedapp/about-us" element={<AboutUs />} />
              <Route path="/rawseedapp/contact" element={<Contact />} />
            </Routes>
          </ScrollToTop>
        </main>
      </div>
    </Router>
  );
}

export default App;
