import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage"
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Route, Routes} 
from "react-router-dom";

const promise = loadStripe('pk_test_51KAfm8SHrAIvDU1tZLIySvJ3HZOoZWcIRNIE4ABYF6BD6Lo3rNEW1xZrvSjk3qU3IDD9ombjFjIyjOOql7NOANFd00lqdayD4Y');

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
          <Route exact path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements> ]}/>
        </Routes>
        </Router>
    </div>
  ); 
}
export default App;
