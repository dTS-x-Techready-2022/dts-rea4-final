import HomePage from "./HomePage/HomePage";
import {
  Routes,
  Route,
  // HashRouter
} from "react-router-dom";
import './App.css';
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./LoginPage/register";
import Popular from './HomePage/Popular';
import Series from './HomePage/Series';
// import ListSeries from "./axios/ListSeries";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/series" element={<Series />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App;