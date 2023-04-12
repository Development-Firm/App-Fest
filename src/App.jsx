import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
import Register from "./components/Register";

const Home=() => {
  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
      <About />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  )
}

const App=() => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="register" element={<Register />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
