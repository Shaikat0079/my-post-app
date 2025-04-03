import { use } from "react"

export default function Posts({postsPromice}){
    const posts = use(postsPromice);
    console.log(posts)
    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>
        </div>
    )
}