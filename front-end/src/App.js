import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login/login";
import { Register } from "./register/register";
import AppBar from "./appbar/Appbar";
import Bank from "./bank/bank";
import Plan from "./plans/plan";
import { Home } from "./home/page";
function App() {
  return (
    <div className="App">
        <Router>
          <AppBar />
          <Routes>

          <Route path="/Home" element={<Plan />} />
            <Route path="/log" element={<Login/>} />
            <Route path="/Register" element={<Register />} />
            {/* <Route path="/add" element={<Additional />} /> */}
            <Route path="/homee" element={<Home />}/>
           <Route path="/bank" element={<Bank />}/>

          
          </Routes>
        </Router>
       
       
    </div>
  );
}

export default App;
