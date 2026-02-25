import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to BookNest</h2>

        <form>
          <div className="form-group">
            <label htmlFor="uname"><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter your username"
              name="uname"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="psw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter your password"
              name="psw"
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="login-btn">Login</button>
            <button type="button" className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
