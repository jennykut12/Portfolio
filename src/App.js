import Navbar from "./Screens/Navbar/Navbar";
import './App.css';
import Intro from "./Screens/Intro";
import Services from "./Screens/Services";
import Experience from "./Screens/Experience";
import Works from "./Screens/Works";
import Porfolio from "./Screens/Porfolio";
import Testimonial from "./Screens/Testimonial";
import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";




function App() {
  

  return (
    <div className="App" >
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Porfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
