import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
