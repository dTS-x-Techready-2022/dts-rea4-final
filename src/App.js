import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import { AuthProvider, RequireAuth, AlreadyAuth } from "./context/AuthContext";

import NotFound from "./pages/not-found/NotFoundPage";

import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

import Tester from "./pages/tester/Tester";

import Unauthorized from "./pages/unauthorized/UnauthorizedPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />
          <Route path="/tester" element={<Tester />} />

          <Route
            key={"unauthorized"}
            path="unauthorized"
            element={<Unauthorized />}
          />

          <Route element={<RequireAuth />}>
            <Route
              key={"readlinglist"}
              path="readlinglist"
              element={<>Reading list</>}
            />
          </Route>

          <Route element={<AlreadyAuth />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
