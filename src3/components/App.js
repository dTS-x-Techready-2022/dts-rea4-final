import HomePage from "./HomePage/HomePage";
import {
  Routes,
  Route,
  // HashRouter
} from "react-router-dom";
import './App.css';
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import Popular from './HomePage/Popular';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />}/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/popular" element={<Popular/>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App;