import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-pinterest-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <div className="top-list">
          <li className="top-list-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="top-list-item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="top-list-item">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="top-list-item">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="top-list-item">{user && 'LOGOUT'}</li>
        </div>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-img"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="top-list-item">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}

        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
