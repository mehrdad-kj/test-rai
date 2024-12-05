import About from "./components/About";
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
    </div>
  );
}

export default App;
