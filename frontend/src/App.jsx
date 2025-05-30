import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./components/Test";
import NavBar from "./components/NavBar/NavBar";
import ProductSection from "./components/Carousel/ProductSection";
import Feature from "./components/Feature/Feature";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <NavBar />
        <Banner />
        <div className=' w-full md:h-[100px] h-[50px]'> </div>
        <ProductSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
