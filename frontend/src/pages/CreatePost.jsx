import {useState} from "react";
import PageHeading from "../components/PageHeading"
import "../css/CreatePost.css";
import { USERID } from "../consts";

const CreatePost = () => {
    const [content,setContent] = useState("");
    const [imgURL,setimgURL] = useState("");

    const [posts,setPosts] = useState(null);

    // const userID = "63163f81fe9b680f2f445902";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postJSON = {
            Content: content,
            User: USERID,
            Images: [imgURL]
        };
        const res = await fetch("http://localhost:4000/posts/",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postJSON)
        });

        if(res.status == 200){
            alert("Goto next page");
        }else{
            alert("Something went wrong");
        }


        // const fetchResponse = await fetch("http://localhost:4000/posts/",{
        //     method: "GET"
        // });

        // const responseJSON = await fetchResponse.json();

        // setPosts(responseJSON);


    }
    return <div className="CreatePost container">
        {/* <h2 >Create Posts</h2> */}
        <PageHeading heading="Create Post"/>
        <form onSubmit={handleSubmit}>
            <div className="inputElement">
                <label>Content</label>
                <textarea rows="6" onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>

            <div className="inputElement">
                <label>Image URL</label>
                <input onChange={(e)=>{setimgURL(e.target.value)}}></input>
            </div>
            <div className="inputElement">
                <button type="submit">POST</button>
            </div>

        </form>
    </div>
}

export default CreatePost;

