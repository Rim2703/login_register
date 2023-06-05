import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/register', {
        username,
        password,
        role,
      });

      console.log(response.data);
      // Redirect to login page
      window.location = '/login';
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className='form'>
      <h1>Register</h1>
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
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
