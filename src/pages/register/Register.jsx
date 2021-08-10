import './register.css';

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Enter you password..."
        />
        <button className="register-button">Register</button>
      </form>
      <button className="register-register-button">Login</button>
    </div>
  );
};

export default Register;
