import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage"

import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={[<Header />,<Home />]} />
          <Route exact path="/checkout" element={[<Header />,<Checkout />]} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        </Router>
    </div>
  );
}
export default App;
