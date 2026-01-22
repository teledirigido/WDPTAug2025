import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:5005';

export default function SignUpPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleName = e => setName(e.target.value);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requestBody = { email, password, name };
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then( response => {
        navigate('/login')
    }).catch( error => {
      console.log(error)
      setErrorMessage(error.response.data.message)
    });


  }

  return (
    <>
      <div className="SignupPage">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email"
            name="email"
            value={email}
            onChange={handleEmail} />

          <label htmlFor="password">Password</label>
          <input type="password"
            name="password"
            value={password}
            onChange={handlePassword} />

          <label htmlFor="name">Name</label>
          <input type="text"
            name="name"
            value={name}
            onChange={handleName} />

          <button type="submit">Sign Up</button>

          { errorMessage && <>
            <p>{errorMessage}</p>
          </> }
        </form>
      </div>
    </>
  )
}