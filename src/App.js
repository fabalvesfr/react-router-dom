import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Contact } from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          {" "}
          {/* Navbar goes in Router component */}
          <Link to="/">HOME</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> {/*Home page*/}
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />{" "}
          {/* path whenever the user types an invalid url */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
