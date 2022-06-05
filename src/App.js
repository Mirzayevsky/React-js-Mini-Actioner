import React, {useMemo, useState} from "react";
import Table from "./Components/Table";
import Input from "./Components/UI/Input";
import "./App.css"
import PostData from "./Components/AddData";
import Select from "./Components/UI/Select";
const data = [
    {
        id: 1,
        title: "Javascript",
        stack: "MERN Stack",
    },
    {
        id: 2,
        title: "Python",
        stack: "Full Stack",
    },
    {
        id: 3,
        title: "Go0",
        stack: "Backend",
    }
]

function App() {
    const [posts, setPosts] = useState(data)
    const [select, setSelect] = useState("")
    const [search,setSearch] = useState("")

    const sortedPosts =  useMemo(()=>{
        console.log('render');
        if (select) {
            return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
        }
        return posts
    },[select,posts])

    const sortedAndSearchPosts  = useMemo (()=>{
return sortedPosts.filter(post => post.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
    },[search,sortedPosts])
        
    

    //call back function
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const deletePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }
  
    const sortPost = (sort) => {
        setSelect(sort)
    }

    return (
        <div className={'app'}>
            <div className={'container'}>
                <div className={'main-title'}>Create Your First Post</div>
                <PostData createPost={createPost}/>
                <div className={'select-wrap'}>
                    <Input 
                     className={'search-input'}
                     placeholder={'Search...'}
                     search={search}
                     onChange={(e) => setSearch(e.target.value)}
                     />
                    <Select
                        value={select}
                        onChange={sortPost}
                        defaultValue={'Sorted by'}
                        options={[
                            {value: "title", name: "Programming"},
                            {value: "stack", name: "Jobs"}
                        ]}
                    />
                </div>
                <div className={'main-title'}>Programming Language</div>
                {sortedAndSearchPosts.length ? <Table remove={deletePost} posts={sortedAndSearchPosts}/> :
                    <h3 className={'error-title'}>User did not posted yet !</h3>}
            </div>
        </div>
    );
}

export default App;
