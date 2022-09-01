import logo from './logo.svg';
import './App.css';
import Header from './components/index'
import Option from './components/section'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Get from "./Pages/Get";
import Edit from "./Pages/Edit";
import Give from "./Pages/Give";

function App() {
  return (
    <div className="App">
    <div  className="background">
    <Header />
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Get" element={<Get />} />
          <Route path="/Give" element={<Give />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </Router>

    </div>
    </div>
  );
}

export default App;
