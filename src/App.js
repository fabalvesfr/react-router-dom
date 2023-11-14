import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/contact";
import { Navbar } from "./navbar";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

const client = new QueryClient();

function App() {
  const [userName, setUserName] = useState("Fabio");

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, setUserName }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> {/*Home page*/}
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />{" "}
              {/* path whenever the user types an invalid url */}
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
