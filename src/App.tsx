import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Slider />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
