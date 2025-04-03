import { use } from "react"
import Post from "./Post";

export default function Posts({postsPromice}){
    const posts = use(postsPromice);
    console.log(posts)
    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            } 
        </div>
    )
}