import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Bannarr from "./components/Bannar";
import Bettar_future from "./components/Section1";
import Service from "./components/Section2";
import Project from "./components/Section3"
import Section3 from "./components/Section3";
import Blogg from "./components/Section4"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
     <Bannarr/>
     <Bettar_future/>
     <Service/>
     <Section3/>
     <Blogg/>
     <Footer/>
    </>
  );
}

export default App;
