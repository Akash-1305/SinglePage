import React,{useState} from "react";
import './App.css';

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <div className="registration-form">
      <form onSubmit={handleSubmit}>    
        < label htmlFor="firstName">First Name:</label>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Last Name" value={email} onChange={(e) => setEmail(e.target.value)} required/>

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit">Register</button>
      </form>
      </div>
    );
}

export default RegistrationForm;