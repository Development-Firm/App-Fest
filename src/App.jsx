import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
import Applicants from "./components/dashboard/Applicants";
import CodeBeesTeam from "./components/dashboard/CodeBeesTeam";
import Dashboard from "./components/dashboard/Dashboard";
import MobileAppTeam from "./components/dashboard/MobileAppTeam";
import WebTeam from "./components/dashboard/WebTeam";
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

        <Route
          exact
          path='/dashboard/'
          element={
            // <ProtectedRoute role={[ 'admin' ]}>
            <Dashboard />
            // </ProtectedRoute>
          }
        >
          <Route exact path="" element={<Applicants />} />
          <Route exact path="applicants" element={<Applicants />} />
          <Route exact path="approved_teams/web" element={<WebTeam />} />
          <Route exact path="approved_teams/mobile" element={<MobileAppTeam />} />
          <Route exact path="approved_teams/code" element={<CodeBeesTeam />} />
        </Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
