import './singlePost.css';

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="single-post-img"
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.{' '}
          <div className="single-post-edit">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Ignacio</b>
          </span>
          <span className="single-post-date">1 hout ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sed
          obcaecati. Nemo error rerum dolor facere placeat harum qui, soluta
          perspiciatis deleniti illo ab fuga, sit numquam, eius sequi
          minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          sed obcaecati. Nemo error rerum dolor facere placeat harum qui, soluta
          perspiciatis deleniti illo ab fuga, sit numquam, eius sequi
          minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          sed obcaecati. Nemo error rerum dolor facere placeat harum qui, soluta
          perspiciatis deleniti illo ab fuga, sit numquam, eius sequi
          minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          sed obcaecati. Nemo error rerum dolor facere placeat harum qui, soluta
          perspiciatis deleniti illo ab fuga, sit numquam, eius sequi
          minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          sed obcaecati. Nemo error rerum dolor facere placeat harum qui, soluta
          perspiciatis deleniti illo ab fuga, sit numquam, eius sequi
          minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          sed obcaecati. Nemo error rerum dolor facere placeat harum qui, soluta
          perspiciatis deleniti illo ab fuga, sit numquam, eius sequi
          minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          sed obcaecati. Nemo error rerum dolor facere placeat harum qui, soluta
          perspiciatis deleniti illo ab fuga, sit numquam, eius sequi minima?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
