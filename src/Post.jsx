export default function Post({post}){
    const {title,body}= post;
    return (
        <div className="postCard">
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
        </div>
    )
}