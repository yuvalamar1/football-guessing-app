import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import the UserContext

const BASE_URL = 'http://localhost:3001/api';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setLoggedInUsername, setLoggedInToken } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { username, password });
      const token = response.data.token;
      axios.defaults.headers.common['Authorization'] = token;
      // Perform any necessary actions with the token
      setLoggedInUsername(username);
      setLoggedInToken(token);
      navigate('/home');
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
