import "../css/Navbar.css"
const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/">Create Post</a>
        <a href="feed">Feed</a>
        <a href="myPosts">My Posts</a>
      </nav>
    </header>
  );
};

export default Navbar;