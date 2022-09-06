import "../css/Post.css";
const Post = (props) => {
  return (
    <div className="postsContainer">
      <div className="postItem">
        <div className="userItem">
          <img src={props.userImage} />
          <span>{props.username}</span>
        </div>
        <div className="postContent">
          <p className="postText">
              {props.content}
            </p>
          <img
              className="postImage"
              src={props.image}
            />
        </div>
      </div>
    </div>
  );
};

export default Post;