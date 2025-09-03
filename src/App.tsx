import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SesameOil from "./pages/SesameOil";
import BlackseedOil from "./pages/BlackseedOil";
// import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <main>
          <Routes>
            <Route path="/rawseedapp" element={<Home />} />
            <Route path="/rawseedapp/sesame-oil" element={<SesameOil />} />
            <Route
              path="/rawseedapp/blackseed-oil"
              element={<BlackseedOil />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
