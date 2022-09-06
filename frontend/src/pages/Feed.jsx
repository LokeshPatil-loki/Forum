import { useState, useEffect } from "react";
import PageHeading from "../components/PageHeading";
import Post from "../components/Post";
import "../css/Feed.css"
const Feed = () => {
    const [postsJSON,setPostsJSON] = useState(null);
    useEffect(()=>{
        const fetchPosts = async ()=> {
            const response = await fetch("http://localhost:4000/posts/");
            const json = await response.json();
            setPostsJSON(json);
        }
        fetchPosts();
    },[]);
    return <div className="Feed">
        <PageHeading heading="Feed"/>
        {/* <Post 
            userImage="https://yt3.ggpht.com/yti/AJo0G0kC0NwCL5OQE8ReFgwCFc5bt6cumNeLp7ILhAXpDw=s88-c-k-c0x00ffffff-no-rj-mo"
            username="Lokesh Patil"
            content="tis a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"
            image="https://img.wattpad.com/6bc2723e37c4ff9eba1650a3db66d1fdb1ec5843/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f713654673471544a4c34516464413d3d2d3438303932393132392e313465636233363638353934333434353736323630363832333437392e6a7067"
        /> */}
        {postsJSON && postsJSON.map(post => {
            console.log(post);
            return <Post 
            username={post.User.FullName}
            userImage={post.User.ProfilePicture}
            content={post.Content}
            image={post.Images[0]}
            />
        })}
    </div>
}

export default Feed;

        {/* <div className="postsContainer">
            <div className="postItem">
                <div className="userItem">
                    <img src = "https://yt3.ggpht.com/yti/AJo0G0kC0NwCL5OQE8ReFgwCFc5bt6cumNeLp7ILhAXpDw=s88-c-k-c0x00ffffff-no-rj-mo" />
                    <span>Lokesh Patil</span>
                </div>
                <div className="postContent">
                    <p className="postText">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </p>
                    <img className="postImage" src="https://img.wattpad.com/6bc2723e37c4ff9eba1650a3db66d1fdb1ec5843/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f713654673471544a4c34516464413d3d2d3438303932393132392e313465636233363638353934333434353736323630363832333437392e6a7067"/>

                </div>
            </div>
        </div> */}