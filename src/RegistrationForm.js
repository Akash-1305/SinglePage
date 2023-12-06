import React,{useState} from "react";
import './App.css';

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const alert=()=>{
      window.alert("You Have Registed Succesfully")
    }

    return (
      <div className="registration-form">
      <form>    
        < label htmlFor="firstName">First Name:</label>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button onClick={alert}>Register</button>
      </form>
      </div>
    );
}

export default RegistrationForm;