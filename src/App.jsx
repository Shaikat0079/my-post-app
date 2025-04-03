import { Suspense } from 'react';
import './App.css'
import Posts from './Posts';

const fetchPosts = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

function App() {
  
  const postsPromice = fetchPosts()

  return (
    <>
      <Suspense fallback={<h2>🌀 fetching...</h2>}>
          <Posts postsPromice={postsPromice}></Posts>
      </Suspense>
    </>
  )
}

export default App
