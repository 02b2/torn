import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Hero/>
      <Footer/>

    </div>
  );
}

export default App;