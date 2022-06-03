import React, {useState} from "react";
import Input from "../UI/Input";

const PostData = ({createPost}) => {
    const [post, setPost] = useState({title: "", stack: ""})

    const addPost = (e) => {
        if(post.title === "" || post.stack === ""){
            alert("Something went wrong!")
        }
        else {
            e.preventDefault()
            const newPost = {
                ...post,
                id: Date.now()
            }
            createPost(newPost)
            setPost({title: "", stack: ""})
        }

    }
    return (
        <form className={'input-wrapper'}>
            <Input
                placeholder={' Programming Language'}
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <Input
                placeholder={'Enter your favourite Stack'}
                value={post.stack}
                onChange={e => setPost({...post, stack: e.target.value})}
            />
            <button className={'add-btn'} onClick={addPost}>
                Add Post
            </button>

        </form>
    )
}
export default PostData