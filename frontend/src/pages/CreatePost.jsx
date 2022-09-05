import {useState} from "react";
const CreatePost = () => {
    const [content,setContent] = useState("");
    const [posts,setPosts] = useState(null);

    const userID = "63163f81fe9b680f2f445902";
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const postJSON = {
        //     Content: content,
        //     User: userID
        // };
        // const res = await fetch("http://localhost:4000/posts/",{
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(postJSON)
        // });

        const fetchResponse = await fetch("http://localhost:4000/posts/",{
            method: "GET"
        });

        const responseJSON = await fetchResponse.json();

        setPosts(responseJSON);


    }
    return <div>
        <h1>Create Posts</h1>
        <form onSubmit={handleSubmit}>
            <label>Content</label>
            <textarea onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <input type="submit" value="POST" />
        </form>
        <hr></hr>
        <div className="POSTS">
            {posts && posts.map(post => {
                return <div>
                    <img src={post.User.ProfilePicture} width="50px" height="50px"/>
                    <h3>{post.User.FullName}</h3>
                    <p>{post.Content}</p>
                </div>
            })}
        </div>
    </div>
}

export default CreatePost;

