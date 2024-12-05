import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Slider />
      <About />
      <Services />
    </div>
  );
}

export default App;
