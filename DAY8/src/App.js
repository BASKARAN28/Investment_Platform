import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/Appbar";
import Home from "./pages/home/home";

import { LoginForm } from "./pages/login/Login";
import {Registration } from "./pages/login/register";
import { Additional } from "./pages/login/Additional";


function App() {
  return (
    <div className="App">
        <Router>
          <AppBar />
          <Routes>

          <Route path="/Home" element={<Home />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="/Register" element={<Registration />} />
            <Route path="/add" element={<Additional />} />
           

          
          </Routes>
        </Router>
       
       
    </div>
  );
}

export default App;
