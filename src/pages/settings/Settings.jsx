import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-profile-picture">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file-input">
              <i className="settings-profile-picture-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file-input" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ignacio" />
          <label>Email</label>
          <input type="email" placeholder="ih@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
