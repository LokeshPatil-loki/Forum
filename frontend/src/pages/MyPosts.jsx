import PageHeading from '../components/PageHeading';
import "../css/MyPosts.css"
import Post from "../components/Post";
import {USERID} from "../consts.js";

import { useState, useEffect } from "react";


const MyPosts = () => {
    const [postsJSON,setPostsJSON] = useState(null);
    useEffect(()=>{
        const fetchPosts = async ()=> {
            const response = await fetch("http://localhost:4000/posts/"+USERID);
            const json = await response.json();
            setPostsJSON(json);
        }
        fetchPosts();
    },[]);
    return <div className="MyPosts">
        <PageHeading heading="My Posts"/>
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

export default MyPosts;