import React from "react"
import { CommentCreate, PostCreate, PostList } from "./components"

export default function App() {
  return (
    <div className='container'>
      <h1>Create Post</h1>
      <hr />
      <h1>Posts</h1>
      <PostList />
      <hr />
    </div>
  )
}