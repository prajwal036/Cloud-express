import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Powerful from "./components/Powerful";
import Footer from "./components/Footer";
// import Copyrights from "./components/Copyrights";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Powerful />
      <Footer />
    </>
  );
}

export default App;
