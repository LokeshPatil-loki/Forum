import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";
import Feed from "./pages/Feed.jsx";
import MyPosts from "./pages/MyPosts.jsx";
import Navbar from "./components/Navbar.jsx"
function App() {
  return (
    <div className="App">
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePost />}> </Route>
          <Route path="feed" element={<Feed />}> </Route>
          <Route path="myPosts" element={<MyPosts />}> </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
