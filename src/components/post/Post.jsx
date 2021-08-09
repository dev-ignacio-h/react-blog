import './post.css';

const Post = () => {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        numquam pariatur sint eaque dolorum! Optio quae magni suscipit eaque
        illum aut repellat eligendi laudantium harum libero, adipisci aliquam,
        placeat a? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas soluta rem, inventore eum, hic voluptates repudiandae suscipit
        expedita, excepturi quaerat sit consequuntur! Iste maiores aspernatur
        tenetur illo necessitatibus ipsa fuga? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptas soluta rem, inventore eum, hic
        voluptates repudiandae suscipit expedita, excepturi quaerat sit
        consequuntur! Iste maiores aspernatur tenetur illo necessitatibus ipsa
        fuga?
      </p>
    </div>
  );
};

export default Post;
