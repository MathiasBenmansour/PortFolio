import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/404/NotFound";
import Darkmode from "./Components/DarkMode/Darkmode";
import News from "./Components/News/News";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Darkmode />
      
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
