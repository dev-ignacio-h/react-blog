import './write.css';

const Write = () => {
  return (
    <div className="write">
      <img
        className="write-img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>

          <input style={{ display: 'none' }} type="file" id="file-input" />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
