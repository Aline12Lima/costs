import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Pages/Home.js";
import Company from "./components/Pages/Company.js";
import Contact from "./components/Pages/Contact.js";
import NewProject from "./components/Pages/NewProject.js";
import Projects from "./components/Pages/Projects.js";
import Container from "./components/Layout/Container.js";
import Navbar from "./components/nav/Navbar.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
