import React,{useState} from 'react'
import './Login.css'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { auth } from './firebase';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e=> {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            // it successfully created a new user with email and password
            if(auth){
                navigate('/')
            }
        })
        .catch(error=> alert(error.message))

    }


    return (
        <div className='loginPage'>
            <Link to ="/">
            <img className='login__logo' 
            src='https://pngimg.com/uploads/amazon/amazon_PNG24.png' alt='logo'></img>
            </Link>
         
        <div className='login__container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail or mobile phone number </h5>
                <input type='text'value={email} onChange={e => setEmail(e.target.value)} 
                />
                <h5>Password</h5>
                <input type = 'password' value={password} onChange={e=> setPassword(e.target.value)}></input>
                
                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>
        
        
        </div> 
    )
}

export default LoginPage
