import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      console.log(response.data);

      if (response.data.role === 'admin') {
        // Redirect to admin page
        history('/admin');
      } else {
        // Redirect to home page
        history('/home');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='form'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <br /> */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <br /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
