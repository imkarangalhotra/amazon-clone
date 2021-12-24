import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";

function App() {
    const [{},dispatch]=useStateValue();
    
    useEffect(()=>{
      // will only run once, when the app component loads...

      auth.onAuthStateChanged(authUser =>{
        console.log('THIS USER IS >>>', authUser);

        if(authUser){
          // the user just logged in / the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }else{
          // the user is logged out
          dispatch({
            type:'SET_USER',
            user: null 
          })
        }
      })

    },[])

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
