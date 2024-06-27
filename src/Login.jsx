import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('RESTAURANT OWNER');

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="RESTAURANT OWNER">RESTAURANT OWNER</option>
        {/* Add more roles as needed */}
      </select>
      <input
        type="email"
        placeholder="Mobile Number or member ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Forgot password? <a href="#">Forgot password?</a>
      </p>
      <p>
        Forgot member ID? <a href="#">Forgot member ID?</a>
      </p>
      <p>
        Not a member yet? <Link to="/signup">Create an Account</Link>
      </p>
    </div>
  );
}

export default Login;
