import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter you password..."
        />
        <button className="login-button">Login</button>
      </form>
      <button className="login-register-button">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
