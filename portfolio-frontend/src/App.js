import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/section/Profile";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Experience from "./components/section/Experience";
import Projects from "./components/section/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="hero">
      <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
