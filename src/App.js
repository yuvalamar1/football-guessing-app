import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Home from './Home';
import { UserProvider } from './UserContext';
//import { GoogleFontLoader } from 'react-google-font-loader';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <div>
      {/* <GoogleFontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]} /> */}
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </UserProvider>
  );
};

export default App;
