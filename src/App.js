import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';
import PetProfile from './Components/PetProfile';
import LoginRegister from './Components/LoginPage';
import SearchPetProfileDisplay from './Components/Searchpetprofiledisplay';
//import LoginRegisterJsx from './Components/LoginPageCheck';
import OwnershipTransfer from './Components/OwnershipTransfer';
import InsuranceClaims from './Components/InsuranceClaims';
import AddInsurancePage from './Components/AddInsurance';
import Insurance from './Components/Insurance'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Main page with all sections combined */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Services />
                <LoginRegister/>
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Separate pages */}
          <Route path="/pet-profile" element={<PetProfile />} />
          <Route path="/search-profile" element={<SearchPetProfileDisplay />} />
          <Route path="/login" element={<LoginRegister />}/>
          <Route path="/ownership-transfer" element={<OwnershipTransfer />} />
          <Route path="/claim-insurance" element={<InsuranceClaims />} />
        <Route path="/add-insurance" element={<AddInsurancePage />} />
        <Route path="/insurance" element={<Insurance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
