import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute> }/>
          <Route path="/detail/:id" element={<ProtectedRoute><Movie/></ProtectedRoute>}/>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
