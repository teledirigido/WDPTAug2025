import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/auth.context";

export default function LoginPage() {

  let navigate = useNavigate();

  const API_URL = 'http://localhost:5005';
  const [email, setEmail] = useState('miguel@ironhack.com');
  const [password, setPassword] = useState('123Abc');
  const [responseMessages, setResponseMessages] = useState('');

  const { storeToken, authenticateUser } = useContext(AuthContext);
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const formBody = { email, password };
    setResponseMessages('');
    console.log(formBody);
    axios.post(`${API_URL}/auth/login`, formBody).then( (response) => {
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/projects');
    }).catch( (error) => {
      console.log(error);
      // setResponseMessages(error.response.data.message);
    });
  }

   return (
    <div className="LoginPage">
      <h1>Login</h1>

      <p>{responseMessages}</p>
 
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
 
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <button type="submit">Login</button>
      </form>
    </div>
  )
}