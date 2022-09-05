import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePost />}> </Route>
          {/* <Route path="/posts" element={<h1>View Post</h1>}> </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
