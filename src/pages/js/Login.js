
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Login.css';
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    // Validate email format and check for empty fields
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }



    const url = 'http://localhost//log.php';
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    axios
      .post(url, formData)
      .then((response) => {
        alert(response.data);
        setEmail('');
        setPassword('');
        setError('');
        navigate('/Dash');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="sign1">
        <a href="/">
          {' '}
          <img className="img7r" src={elogo} alt="logo1" />
        </a>
      </div>
      <div>
        <main className="box3">
          <form>
            <h3 className="pick">Login your Details</h3>
            {error && <div className="error">{error}</div>}
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                required
              />
            </div>

            <div className="inputBox">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              name=""
              style={{ alignContent: 'center' }}
            >
              Login
            </button>
            <Link className="link" to="/Updpass2" style={{ float: 'center' }}>
              <span className="login-span">Forgot Password?</span>
            </Link>
            <Link className="link" to="/Register" style={{ float: 'center' }}>
              <span className="login-span">Don't have an account?</span>
            </Link>
            
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;



