
import "./App.css";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import MySkills from "./Home/MySkills";
import Navbar from "./Home/Navbar";
import SelectedWorks from "./Home/SelectedWorks";

function App() {
  return (
    <div className="px-6 py-4 md:px-12 md:py-6 lg:px-24 lg:py-12">
      <Navbar/>
      <Hero/>
      <SelectedWorks/>
      <MySkills/>
      <Footer/>
    </div>
  );
}

export default App;
