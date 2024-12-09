import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLOgin from "./pages/UserLOgin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLOgin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainsignup" element={<CaptainSignup />} />
      </Routes>
    </>
  );
}

export default App;
